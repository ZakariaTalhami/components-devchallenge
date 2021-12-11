/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import useComponentStyle from '../../style/useComponentStyle';

const Button = ({ color, variant, size, shadowed, ...props }) => {
  const style = useComponentStyle('Button', {
    color,
    variant,
    size,
    shadowed,
  });
  console.log(style);
  return <button css={style} {...props} />;
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  variant: PropTypes.oneOf(['solid', 'outline', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shadowed: PropTypes.bool,
};

export default Button;
