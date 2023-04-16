// 3 types of Buttons ----> { Default, inverted, Google sign in}

import React from "react";
import './button.styles.scss'



const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}



function Button({ children, buttonType, ...OtherProps }) {
  return <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}{...OtherProps}>{children}</button>;
}

export default Button;
