import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>Welcome {this.props.user.email}!</div>;
  }
}

export { User };
