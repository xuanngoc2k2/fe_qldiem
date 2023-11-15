import styles from './TopHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TopHeader({ data }) {
    return (
        <div className={cx('box')}>
            {data.map((title, index) => {
                return <p style={{
                    marginBottom: -3,
                    marginTop: -3
                }} className={cx('title')} key={index}>{title}</p>
            })}
        </div>
    );
}

export default TopHeader;