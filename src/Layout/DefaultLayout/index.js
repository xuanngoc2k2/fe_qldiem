import Header from '../Header';
import Footer from '../Footer';
import classNames from 'classnames/bind';
import styles from './Default.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header title={'Hệ thống thông tin trường đại học'} />
            </div>
            <div className={cx('container')}>{children}</div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
