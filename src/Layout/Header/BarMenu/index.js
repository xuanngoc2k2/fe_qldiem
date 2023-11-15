import { useNavigate } from 'react-router-dom';
import styles from './BarMenu.module.scss';
import classNames from 'classnames/bind';
import { useCookies } from 'react-cookie';
import { logout } from '~/apis';

const cx = classNames.bind(styles);

function BarMenu({ data }) {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);

    const navigate = useNavigate();
    return (
        <div className={cx('box-menu')}>
            <ul style={{
                marginBottom: -1,
                marginTop: -2,
            }}>
                <li>
                    <a href="/admin/qlsv">Trang chủ</a>
                </li>
                <li style={{ cursor: 'pointer' }}>
                    {cookie.user && (
                        <div
                            onClick={async () => {
                                await logout();
                                // eslint-disable-next-line no-restricted-globals
                                location.href = '/login';
                            }}
                        >
                            Đăng Xuất
                        </div>
                    )}
                    {!cookie.user && <a href="/">Đăng nhập</a>}
                </li>
                <li>
                    <a href="/admin/qlsv">Hỏi đáp</a>
                </li>
                <li>
                    <a href="/admin/qlsv">Trợ giúp</a>
                </li>
            </ul>
        </div>
    );
}

export default BarMenu;
