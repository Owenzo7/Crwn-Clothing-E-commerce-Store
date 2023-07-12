import { React, useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Forminput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setformFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // RESET FORM FIELDS AFTER SIGNING UP

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-founc":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Forminput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Forminput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

const SignInWithGoogle = async () => {
  await signInWithGooglePopup();
};

export default SignInForm;
