import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Image from "../components/Image";
import WelcomePage from "../components/index/WelcomePage";
import ErrorPage from "../components/index/ErrorPage";

import logoBlack from "../images/logoBlack.png";
import room404 from "../images/room404.png";

import "../styles/index.less";

firebase.initializeApp({
  apiKey: "AIzaSyAzDykfytwb2JBZ7mtfzVFVm5AAXCMuT54",
  authDomain: "behindtheminderslife.firebaseapp.com",
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false, success: null };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const emailSplited = user.email.split("@");
      const emailDomain = emailSplited[1];
      if (emailDomain === ("school.mindera.com" || "mindera.com")) {
        this.setState({ isSignedIn: !!user, success: true });
      } else {
        this.setState({ isSignedIn: !!user, success: false });
      }
    });
  }

  render() {
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => false,
      },
    };

    const auth = firebase.auth();

    return (
      <>
        {this.state.isSignedIn ? (
          this.state.success ? (
            <WelcomePage
              name={auth.currentUser.displayName}
              handleClick={() => {
                auth.signOut();
                this.setState({ isSignedIn: false });
              }}
            />
          ) : (
            <ErrorPage
              image={room404}
              handleClick={() => {
                auth.signOut();
                this.setState({ isSignedIn: false });
              }}
            />
          )
        ) : (
          <div id="toLogin">
            <Image imageSrc={logoBlack} alt="Logo Site" cName="login-logo" />
            <h1> Behind The Minder's Life </h1>
            <h2> Get ready for the adventure </h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </div>
        )}
      </>
    );
  }
}

export default Index;
