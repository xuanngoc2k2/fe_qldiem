import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllhp, getKi } from "~/apis";

function DanhSachHp() {
    const [data, setdate] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            try {
                getAllhp(id).then((value) => {
                    // console.log(value);
                    setdate(value)
                });
            } catch {
                alert('Lỗi lấy dữ liệu')
            }
        }
    }, [id]);
    return (<div>
        <div className='d-flex justify-content-between mt-5 col col-8' style={{
            color: 'green',
            fontWeight: 'bold',
            marginTop: 30,
            fontSize: 20
        }}>DANH SÁCH HỌC PHẦN ĐÃ HỌC
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
                    }}>Giảng viên</th>
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
                    }}>Thời gian</th>
                    <th style={{
                        backgroundColor: '#2467ae',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'white',
                    }}>Địa điểm</th>
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
                    }}>Sỉ số</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'table-light' : 'table-primary'}>
                        {<>
                            <td key={index}>{index + 1}</td>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </>
                        }
                    </tr>
                ))}
            </tbody>
        </table></div>);
}

export default DanhSachHp;