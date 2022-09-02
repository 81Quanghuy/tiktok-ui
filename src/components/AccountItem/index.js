import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/298592587_1735332750158769_5954008647144630258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FCGzo2ZinesAX-jbdxi&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT-HouQhJDz6KicSQYOh2OAWuPtGw-J9XdGR6EBYqV8cbQ&oe=6306FFA6"
        alt="avatar"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
