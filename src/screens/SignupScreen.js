import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="signup-screen">
      <form>
        <h2>Sign In</h2>
        <input ref={emailRef}  type="email" placeholder="Email" />
        <input ref={passwordRef}  type="password" placeholder="Password" />

        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h5>
          <span className="grey"> New to Netflix?</span>{" "}
          <span className="signuplink" onClick={register}>
            {" "}
            Sign up now.
          </span>{" "}
        </h5>
      </form>
    </div>
  );
}

export default SignupScreen;
