import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDiemKi, getKi, svGetDiem } from '~/apis';
import classNames from 'classnames/bind';
import styles from './custom.module.scss';

const cx = classNames.bind();
function BangDiemSV({ data, userInfo }) {
    // console.log(userInfo.id)
    const [semesters, setSemesters] = useState([]);
    // const { id } = useParams();
    // const semesters = ['Kì 1', 'Kì 2', 'Kì 3', 'Kì 4'];
    useEffect(() => {
        if (userInfo.id) {
            try {
                getKi(userInfo.id).then((seme) => {
                    // console.log(seme)
                    setSemesters(seme)
                })
                // setSemesters()
            } catch {
                alert('Lỗi lấy dữ liệu')
            }
        }
    }, [userInfo.id]);

    // State để lưu trữ kì được chọn
    const [selectedSemester, setSelectedSemester] = useState("");
    const [dataL, setdateL] = useState([]);
    // console.log(selectedSemester)
    // Hàm xử lý khi giá trị của select thay đổi
    const handleSemesterChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedSemester(selectedValue);
        // console.log(selectedSemester);
        try {
            getDiemKi(userInfo.id, selectedValue).then((value) => {
                // console.log(value);
                setdateL(value)
            });
        }
        catch {
            alert("lỗi lcoj");
        }
        // const datal =
    };
    // console.log(dataL);
    return (
        <div>
            <div className='d-flex justify-content-between mt-5 col col-8' style={{
                color: 'green',
                fontWeight: 'bold'
            }}>
                <div>MSV: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.email}</span></div>
                <div>Họ tên: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.firstName + ' ' + userInfo.lastName}</span></div>
                <div>Lớp: <span style={{
                    marginLeft: 10,
                    color: 'black'
                }}>{userInfo.class}</span></div>
                <div className='d-flex'>
                    <label htmlFor='semesterSelect'>Kì học:</label>
                    <select
                        id='semesterSelect'
                        value={selectedSemester}
                        onChange={handleSemesterChange}
                        style={{
                            width: 100,
                            marginLeft: 20,
                        }}
                    >
                        <option value=''>---</option>
                        {semesters.map((semester, index) => (
                            <option key={index} value={semester}>
                                Kì {semester}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <h6>BẢNG ĐIỂM CHI TIẾT</h6>
            </div>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr className='table-primary'>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>STT</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Tên học phần</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Số tín chỉ</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Học kì</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Năm</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Điểm QT</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>Điểm THI</th>
                        <th style={{
                            backgroundColor: '#2467ae',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'white',
                        }}>TKHP</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedSemester && dataL.length ? dataL.map((row, index) => (
                        <tr key={index}
                            className={index % 2 === 0 ? 'table-light' : 'table-primary'}>
                            {<>
                                <td key={index}>{index + 1}</td>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}</>
                            }
                        </tr>
                    )) : data.map((row, index) => (
                        <tr key={index}
                            className={index % 2 === 0 ? 'table-light' : 'table-primary'}>
                            {<>
                                <td key={index}>{index + 1}</td>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}</>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default BangDiemSV;
