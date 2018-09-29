import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

const Button = props =>{
    let buttonClass = "btn";
    if (props.type === "secondary") {
        buttonClass += " -hollow"
    };

    return(
        <Link className={buttonClass} to="/work">{props.label}</Link>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired
}
export default Button;