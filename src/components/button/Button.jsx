import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../style/ThemeContext';

const useComponentStyle = (name, props) => {
    let style = {};
    const theme = useContext(ThemeContext).components[name];

    if(theme) {
        const size = props?.size || theme.default.size;
        const variant = props?.variant || theme.default.variant;
        const color  = props?.color || theme.default.color;

        style = {
            ...(theme.base),
            ...(theme.variants[variant][color]),
            ...(theme.sizes[size]),
        }
    }


    return style;
}

const Button = ({...props}) => {
    const style = useComponentStyle("Button", {});
    console.log(style);
    return (
        <button style={{
            ...style
        }} {...props}>

        </button>
    );
}

Button.propTypes = {
    
}

export default Button;