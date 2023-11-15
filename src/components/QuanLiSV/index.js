import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { deleteStudent, getStudent, getStudentByName, getSvbyMsv } from '~/apis';
import styles from './QuanLiSV.module.scss';
import { Button, Form } from 'react-bootstrap';
import SinhVienModal from '../modals/SinhVien';
import ReactPaginate from 'react-paginate';

const cx = classNames.bind(styles);

function QuanLiSV() {
    const [refetch, setRefetch] = useState(true);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' hoặc 'desc'
    const [sortField, setSortField] = useState('lastName'); // Trường dữ liệu sẽ được sắp xếp
    const sortStudents = (data) => {
        const sortedData = [...data].sort((a, b) => {
            const fieldValueA = a[sortField].toLowerCase();
            const fieldValueB = b[sortField].toLowerCase();

            if (sortOrder === 'asc') {
                return fieldValueA.localeCompare(fieldValueB);
            } else {
                return fieldValueB.localeCompare(fieldValueA);
            }
        });

        return sortedData;
    };
    console.log(sortStudents(students))
    const pageCount = Math.ceil(students.length / 10); // Giả sử hiển thị 10 sinh viên mỗi trang

    // Lọc danh sách sinh viên để hiển thị trang hiện tại
    const displayedStudents = students.slice(currentPage * 10, (currentPage + 1) * 10);

    const handleClose = () => {
        setShow(false);
        setRefetch(!refetch);
    };
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const handleDelete = async (id) => {
        const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?');
        if (shouldDelete) {
            try {
                await deleteStudent(id);
                setRefetch(!refetch);
            }
            catch {
                alert('Sinh viên đang trong danh sách môn học');
            }
        }

    };
    const [dataDetail, setDatadt] = useState({})
    const handleDetal = async (msv) => {
        setShow(true);
        try {
            const dt = await getSvbyMsv(msv);
            setDatadt(dt);
        }
        catch {
            alert("LỖi lấy api sv")
        }
    }
    const handleAdd = () => {
        setDatadt({});
        setShow(true)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await getStudent(search);
                const sortedData = sortStudents(response);
                setStudents(sortedData);
            } catch (error) {
                console.error('Lỗi lấy dữ liệu', error);
            }
        };
        fetchData();
    }, [refetch, search, sortOrder, sortField]);

    const handleSort = (columnName) => {
        setSortField(columnName);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Danh sách sinh viên</h1>
            <div className={cx('info-lop')}>
                <Form.Control style={{ width: 400 }}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm kiếm"
                />
                <Button onClick={handleAdd} className={cx('btn-them')}>
                    Thêm sinh viên
                </Button>
            </div>

            <div className={cx('ds-sinhvien')}>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>Mã sinh viên</th>
                            <th>Họ đệm</th>
                            <th onClick={() => handleSort('lastName')} style={{ cursor: 'pointer' }}>
                                Tên
                            </th>
                            <th>Lớp</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedStudents.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.email}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.class}</td>
                                <td>
                                    <Button onClick={() => handleDetal(student.email)}>Chi tiết</Button>
                                    <Button onClick={() => handleDelete(student.id)} className={cx('delete')}>
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={cx('pagination')}
                    subContainerClassName={cx('pages pagination')}
                    activeClassName={cx('active')}
                    previousClassName={cx('custom-previous')} // Add a custom class for the previous button
                    nextClassName={cx('custom-next')}
                />
            </div>

            {show && <SinhVienModal show={show} data={dataDetail} handleClose={handleClose} />}
            {/* {show && <SinhVienModal show={show} handleClose={handleClose} />} */}
        </div>
    );
}

export default QuanLiSV;
