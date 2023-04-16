import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <div>
      <h1>Sign in Page</h1>
      <SignInForm />
      <SignupForm />
    </div>
  );
}

export default Authentication;
