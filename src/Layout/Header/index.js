import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import TopHeader from './TopHeader';
import BarMenu from './BarMenu';
import { useCookies } from 'react-cookie';

const cx = classNames.bind(styles);
let dataTopHeader = [
    'Khách',
];

function Header({ title }) {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);
    if (cookie.user) {
        if (cookie.user.role == 1) {
            dataTopHeader = [
                'Admin',
                'Vai trò: Quản trị viên'
            ]
        }
        else {
            const name = cookie.user.firstName + ' ' + cookie.user.lastName;
            dataTopHeader = [
                name,
                'Vai trò: Sinh viên'
            ]
        }
    }
    else {
        dataTopHeader = dataTopHeader;
    }
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>{title}</h2>
            <TopHeader data={dataTopHeader} />
            <BarMenu />
        </div>
    );
}

export default Header;
