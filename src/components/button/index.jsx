import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = (props) => {
    const {
        className, children, onClick, disabled,
    } = props;
    const attributes = {};
    const classNameList = ['btn'];

    Object.keys(props).forEach((key) => {
        attributes[key] = props[key];
    });

    if (disabled) attributes.disabled = 'disabled';

    attributes.className = [].concat(
        classNameList,
        className,
    ).join(' ').trim();

    return (
        <button
            type="button"
            onClick={onClick}
            {...attributes}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    className: '',
};

export default Button;
