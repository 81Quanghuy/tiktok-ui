import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  disabled = false,
  primary = false,
  outline = false,
  className,
  small = false,
  large = false,
  text = false,
  rounded = false,
  leftIcon = false,
  rightIcon = false,
  boderline = false,
  children,
  onClick,
  ...passProps
}) {
  let Compo = 'button';

  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Compo = Link;
  } else if (href) {
    props.href = href;
    Compo = 'a';
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] == 'function') {
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    boderline,
  });

  return (
    <Compo className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Compo>
  );
}

export default Button;
