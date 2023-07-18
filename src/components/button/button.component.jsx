// 3 types of Buttons ----> { Default, inverted, Google sign in}

import React from "react";
import {
  InvertedButton,
  GoogleSignInButton,
  BaseButton,
} from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

function Button({ children, buttonType, ...OtherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...OtherProps}>{children}</CustomButton>;
}

export default Button;
