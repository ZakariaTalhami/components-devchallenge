import { useContext } from 'react';
import { ThemeContext } from '../style/ThemeContext';

const useComponentStyle = (name, props) => {
  let style = {};

  // Remove any undefined properties in the props
  Object.keys(props).forEach((key) => (props[key] === undefined ? delete props[key] : {}));

  const theme = useContext(ThemeContext).components[name];

  if (theme) {
    props = {
      ...theme.default,
      ...props,
    };
    style = {
      ...(theme.base || {}),
      ...(props.shadowed ? theme.boxShadow : {}),
      ...(theme.variants[props.variant].base || {}),
      ...(theme.variants[props.variant][props.color] || {}),
      ...(theme.sizes[props.size] || {}),
    };
  }

  return style;
};

export default useComponentStyle;
