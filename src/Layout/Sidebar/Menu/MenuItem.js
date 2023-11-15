import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;