import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar({ listmenu }) {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('title-sidebar')}>
                Danh mục chính
            </div>
            <div className={cx('menu')}>
                <Menu>
                    {listmenu.map((menu) => {
                        return (
                            <MenuItem title={menu.title}
                                to={menu.to}
                            />
                        )
                    })}
                    {/* <MenuItem title="For You"
                    //to={config.routes.home}
                    />
                    <MenuItem
                        title="Following"
                    //  to={config.routes.following}
                    />
                    <MenuItem title="LIVE"
                    //to={config.routes.live} 
                    /> */}
                </Menu>
            </div>
        </aside>
    );
}

export default Sidebar;