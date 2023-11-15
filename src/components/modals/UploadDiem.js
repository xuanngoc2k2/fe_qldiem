import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const UploadDiemModal = ({ show, handleClose, csvData }) => {
    console.log({ csvData });
    return (
        <Modal show={show} onHide={handleClose} style={{ width: 500 }}>
            <Modal.Header closeButton>
                <Modal.Title>Import from csv</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table>
                    <thead>
                        <tr>
                            {csvData[0] &&
                                Object.keys(csvData[0]).map((header, index) =>
                                    <th key={index}>{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UploadDiemModal;
