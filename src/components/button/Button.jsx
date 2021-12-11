/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import useComponentStyle from '../../style/useComponentStyle';

const Button = ({ color, variant, size, shadowed, disabled, ...props }) => {
  const style = useComponentStyle('Button', {
    color,
    variant,
    size,
    shadowed,
  });

  return <button css={style} {...props} disabled={disabled}/>;
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  variant: PropTypes.oneOf(['solid', 'outline', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shadowed: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
