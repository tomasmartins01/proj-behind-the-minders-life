import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { connect } from "react-redux";

import Image from "../components/utils/Image";
import WelcomePage from "../components/firstPage/WelcomePage";
import ErrorPage from "../components/firstPage/ErrorPage";
import { loginUserAction, logoutUserAction } from "../redux/userLogin/actions";

import logoBlack from "../images/logoBlack.png";
import logoWhite from "../images/logoWhite.png";
import logoLife from "../images/logoLife.png";
import logoLifeBlack from "../images/logoLifeBlack.png";

import "../styles/index.less";

firebase.initializeApp({
  apiKey: "AIzaSyAzDykfytwb2JBZ7mtfzVFVm5AAXCMuT54",
  authDomain: "behindtheminderslife.firebaseapp.com"
});

const FirstPage = ({ loginUser, logoutUser, isNightMode }) => {
  document.title = "Behind The Minders Life";
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSucceded, setIsSucceded] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  const auth = firebase.auth();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      const emailSplited = user.email.split("@");
      const emailDomain = emailSplited[1];
      if (
        emailDomain === "mindera.com" ||
        emailDomain === "school.mindera.com"
      ) {
        setIsSignedIn(true);
        setIsSucceded(true);
      } else {
        setIsSignedIn(true);
        setIsSucceded(false);
      }
    });

    if (isSignedIn && isSucceded) {
      loginUser();
    }

    if (!isSignedIn && isSucceded) {
      logoutUser();
      setIsSucceded(false);
    }
  });

  return (
    <>
      {isSignedIn ? (
        isSucceded ? (
          <WelcomePage
            name={auth.currentUser.displayName}
            handleClick={() => {
              auth.signOut();
              setIsSignedIn(false);
            }}
            image={isNightMode ? logoLife : logoLifeBlack}
          />
        ) : (
          <ErrorPage
            handleClick={() => {
              auth.signOut();
              setIsSignedIn(false);
            }}
          />
        )
      ) : (
        <div id="toLogin">
            <Image
              imageSrc={isNightMode ? logoWhite : logoBlack}
              alt="Logo Site"
              cName="login-logo"
            />
          <h1> Behind The Minder's Life </h1>
          <h2> Get ready for the adventure </h2>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUserAction()),
  logoutUser: () => dispatch(logoutUserAction())
});

export default connect(undefined, mapDispatchToProps)(FirstPage);
