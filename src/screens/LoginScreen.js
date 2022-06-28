import React from "react";
import "./LoginScreen.css";
import { useEffect, useState } from "react";
import SignupScreen from "./SignupScreen"

function LoginScreen() {
  const [signup, setSignup] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png"
          alt="Netflix Logo"
        />
      </div>
      <button onClick={() => setSignup(true)} className="loginScreen_button">
        Sign In
      </button>
      <div className="loginScreenGredient"></div>
      <div className="loginScreen_body">
        {signup ? (
          <SignupScreen />
        ) : (
          <>
            <h3>Welcome back!</h3>
            <h1 className="loginScreen_title">
              Unlimited movies, TV shows and more.
            </h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <div className="loginscreen_input">
              <form action="">
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignup(true)}
                  className="Loginscreen_GetStarted"
                >
                  GET START
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
