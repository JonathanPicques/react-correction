import React, { Component } from "react";

import { User } from "./User";
import { Login } from "./Login";

class App extends Component {
  state = {
    user: undefined
  };
  render() {
    if (this.state.user === undefined) {
      return <Login onLoginSuccess={this.handleUserChange} />;
    }
    return <User user={this.state.user} />;
  }

  handleUserChange = user => {
    this.setState({ user: user });
  };
}

export { App };
