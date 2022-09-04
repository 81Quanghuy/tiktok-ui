import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem(data) {
  return (
    <Button to={data.data.to} className={cx('menu-item')} leftIcon={data.data.icon}>
      {data.data.title}
    </Button>
  );
}

export default MenuItem;
