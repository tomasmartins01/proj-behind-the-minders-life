import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Private = ({ path = "/", exact = false, component = null, isLogged }) => {
  return isLogged ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(Private);
