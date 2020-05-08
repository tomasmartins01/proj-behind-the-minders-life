import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { connect } from "react-redux";

import Image from "../components/utils/Image";
import WelcomePage from "../components/firstPage/WelcomePage";
import ErrorPage from "../components/firstPage/ErrorPage";
import loginUserAction from "../redux/userLogin/actions";

import logoBlack from "../images/logoBlack.png";
import logoWhite from "../images/logoWhite.png";
import logoLife from "../images/logoLife.png";
import logoLifeBlack from "../images/logoLifeBlack.png";
import room404 from "../images/room404.png";

import "../styles/index.less";

firebase.initializeApp({
  apiKey: "AIzaSyAzDykfytwb2JBZ7mtfzVFVm5AAXCMuT54",
  authDomain: "behindtheminderslife.firebaseapp.com"
});

const FirstPage = ({ loginUser, isNightMode }) => {
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
      if (emailDomain === "school.mindera.com" || emailDomain === "mindera.com") {
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
            image={room404}
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
  loginUser: () => dispatch(loginUserAction())
});

export default connect(undefined, mapDispatchToProps)(FirstPage);
