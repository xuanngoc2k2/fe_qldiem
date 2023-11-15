import { useCookies } from 'react-cookie';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './SidebarLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

let datalistmenu = [
    {
        title: 'Sinh viên',
        to: '/admin/qlsv',
    },
    {
        title: 'Học phần',
        to: '/admin/qlhp',
    },
];
function SidebarLayout({ children, data }) {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    if (cookie.user && cookie.user.role == 2) {
        datalistmenu = [
            {
                title: 'Tra cứu điểm',
                to: '/',
            },
            {
                title: 'Xem học phần',
                to: `/sinh-vien/course/${cookie.user.id}`
            },
            {
                title: 'Thống kê điểm',
                to: `/score/count/${cookie.user.id}`
            }
        ];
    }
    else {
        datalistmenu = datalistmenu
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header title={"Hệ Thống thông tin trường đại học"} />
            </div>
            <div className={cx('container')}>
                <Sidebar listmenu={datalistmenu} />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default SidebarLayout;
