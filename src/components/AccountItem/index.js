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
        src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/298592587_1735332750158769_5954008647144630258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xUYPQL3FCFMAX_dATsg&_nc_ht=scontent.fhan5-10.fna&oh=00_AT8-tGwbemmomQJgQDoZs5D1d5-X2dlr2Ad4SVRLT0N9tA&oe=6318CBE6"
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
