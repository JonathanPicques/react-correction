import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLogging: false,
    errorMessage: undefined
  };
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.email}
            placeholder="Email"
            disabled={this.state.isLogging}
            //
            onChange={this.handleEmailChange}
          />
        </p>
        <p>
          <input
            type="text"
            value={this.state.password}
            placeholder="Password"
            disabled={this.state.isLogging}
            //
            onChange={this.handlePasswordChange}
          />
        </p>
        <p>
          <button
            disabled={this.state.isLogging}
            //
            onClick={this.handleLoginAction}
          >
            Login
          </button>
        </p>
        <p style={{ color: "red" }}>{this.state.errorMessage}</p>
      </div>
    );
  }
  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });
  handleLoginAction = () => {
    this.setState({ isLogging: true, errorMessage: undefined });
    setTimeout(() => {
      if (this.state.email === "test" && this.state.password === "test") {
        this.props.onLoginSuccess({
          email: this.state.email,
          password: this.state.password
        });
      } else {
        this.setState({ errorMessage: "Error while logging in" });
      }
      this.setState({ isLogging: false });
    }, 1200);
  };
}

export { Login };
