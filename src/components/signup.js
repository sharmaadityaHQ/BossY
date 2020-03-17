import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const Signup = () => {

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

const signup = () => {
  //Storing the details in the database.
}

export default Signup;
