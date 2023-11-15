import QuanLiSV from "~/components/QuanLiSV";
import styles from './Admin.module.scss';
import classNames from "classnames/bind";
import QuanLiHP from "~/components/QuanLiHP";

const cx = classNames.bind(styles);

function Admin() {
    return (<div className={cx('content')}>
        <QuanLiHP />
    </div>
    );
}

export default Admin;