import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '~/asset/image';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container-footer')}>
            <div className={cx('intro')}>
                <div className={cx('address')}>
                    <div className={cx('logo')}>
                        <img src={images.logo_footer} className={cx('logo')} width={110} />
                        <p style={{
                            marginBottom: 0,
                        }} className={cx('title')}>
                            Trường Đại Học Giao Thông vận tải
                        </p>
                    </div>
                    <div className={cx("desc")}>
                        <p style={{
                            marginBottom: 0,
                        }}>Địa chỉ: Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội.</p>
                        <p style={{
                            marginBottom: 0,
                        }}>Điện thoại: (84.24) 37663311 - Fax: (84.24)37669613</p>
                        <p style={{
                            marginBottom: 0,
                        }}>Email: dhgtvt@utc.edu.vn</p>
                    </div>
                </div>
                <div className={cx('follow')}>
                </div>

                <div className={cx('map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.113115944697!2d105.80084021132085!3d21.0281594877174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab424a50fff9%3A0xbe3a7f3670c0a45f!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaQ!5e0!3m2!1svi!2s!4v1698583365522!5m2!1svi!2s"
                        width={500}
                        height={250}
                        style={{ border: "0" }}
                        className={cx('map-iframe')}
                    >
                    </iframe>

                </div>
            </div>
        </div>
    );
}

export default Footer;