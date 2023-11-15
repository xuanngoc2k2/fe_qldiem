import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { gvCreateCourse, gvUpdateCourse, gvUpdateDiemSv } from '~/apis';

export default function AddSinhVienModals({ id, show, handleClose }) {
    const [hodem, setHodem] = useState('');
    const [name, setName] = useState('');
    const [lop, setLop] = useState('');
    const [msv, setMsv] = useState('');
    const [diemqt, setDiemqt] = useState('');
    const [diemthi, setDiemthi] = useState('');


    const onSubmit = async () => {
        if (!hodem ||
            !name ||
            !lop ||
            !msv) {
            alert(' Vui long nhap du thong tin');
            return;
        }

        try {
            let sv = {
                "firstName": hodem,
                "lastName": name,
                "classN": lop,
                "email": msv,
                "middle": null,
                "final": null
            }

            if (diemqt) {
                sv["middle"] = parseFloat(diemqt.replace(',', '.'))
            }
            if (diemthi) {
                sv["final"] = parseFloat(diemthi.replace(',', '.'))
            }
            await gvUpdateDiemSv(id, [sv]);
            // await gvCreateCourse(course);
        } catch (error) {
            alert(error);
        }
        handleClose();
    };

    return (
        <>
            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm sinh viên</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className='row'>
                                <Form.Group className="mb-3 col-7">
                                    <Form.Label>Họ đệm</Form.Label>
                                    <Form.Control value={hodem} onChange={(e) => setHodem(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="email">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-7" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Mã sinh viên</Form.Label>
                                    <Form.Control value={msv} onChange={(e) => setMsv(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lớp</Form.Label>
                                    <Form.Control value={lop} onChange={(e) => setLop(e.target.value)} type="text" />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Điểm QT</Form.Label>
                                    <Form.Control value={diemqt} onChange={(e) => setDiemqt(e.target.value)} type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-5" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Điểm Thi</Form.Label>
                                    <Form.Control value={diemthi} onChange={(e) => setDiemthi(e.target.value)} type="text" />
                                </Form.Group>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}
