import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Signup extends Component {
  signup() {
    //Send the data of the user to the database.
  }
  render() {
    return (
      <div>
        <h1 className="label">SIGNUP</h1>
        <br />
        <br />
        <h2>NAME</h2>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <h2>EMAIL</h2>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <h2>PASSWORD</h2>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <h2>CONFIRM PASSWORD</h2>
        <br />
        <input type="text"></input>
        <br />
        <br />
        <Link to="/login">
          <button onClick={() => this.signup()}>Signup</button>
        </Link>
      </div>
    );
  }
}

export default Signup;
