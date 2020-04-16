import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Title from "../components/Title";

import "../styles/index.less";

firebase.initializeApp({
  apiKey: "AIzaSyAzDykfytwb2JBZ7mtfzVFVm5AAXCMuT54",
  authDomain: "behindtheminderslife.firebaseapp.com"
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      const emailSplited = firebase.auth().currentUser.email.split("@");
      const emailDomain = emailSplited[1];
      if (
        emailDomain === "school.mindera.com" ||
        emailDomain === "mindera.com"
      ) {
        this.setState({ isSignedIn: !!user });
      }
    });
  }

  render() {
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => false
      }
    };
    return (
      <>
        <Title tabTitle="Behind The Minder's Life" />
        <h1> Behind The Minder's Life </h1>
        <h2> Get ready for some new adventures inside Mindera! </h2>
        {this.state.isSignedIn ? (
          <>
            <div>Welcome {firebase.auth().currentUser.displayName}</div>
            <button
              onClick={() => {
                firebase.auth().signOut();
                this.setState({ isSignedIn: false });
              }}
            >
              Sign out!
            </button>
          </>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </>
    );
  }
}

export default Index;
