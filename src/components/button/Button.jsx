/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import useComponentStyle from '../../style/useComponentStyle';

const ButtonIcon = ({icon, left, right}) => <span className="material-icons"
  style={{
    fontSize: "inherit",
    marginRight: `${left ? 0.5 : 0}rem`,
    marginLeft: `${right ? 0.5 : 0}rem`,
  }}
>{icon}</span>

const Button = ({ color, variant, size, shadowed, disabled, leftIcon, rightIcon, ...props }) => {
  const style = useComponentStyle('Button', {
    color,
    variant,
    size,
    shadowed,
  });

  return <button css={style} {...props} disabled={disabled}>
    {leftIcon && <ButtonIcon icon={leftIcon} left/>}
    <span>{props.children}</span>
    {rightIcon && <ButtonIcon icon={rightIcon} right/>}
    </button>;
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  variant: PropTypes.oneOf(['solid', 'outline', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  shadowed: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
