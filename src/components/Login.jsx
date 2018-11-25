import React from "react";
import "../App.css";
import ErrorMessage from "./ErrorMessage";

const initialState = {
  email: "",
  password: "",
  valid: false,
  type: "password",
  errors: ""
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState
    this.handleClick = this.handleClick.bind(this);
  }

  validateForm() {
    /*  console.log(this.state.email, this.state.password); */
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({ valid: true });
    }
  }

  handleChange = event => {
    console.log(event.target.value);
    if (event.target.id === "email") {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }

    this.validateForm();
  };

  handleSubmit = e => {
    e.preventDefault();
    
  };

  checkValid = () => {
    let passed = {
      email: false
      
    };
    
    console.log(this.passed.email);
   /*  let errors = ""; */
    let errorMessages = {
      email: "Invalid email address."
    };

    if (this.handleSubmit()) {
      if (
        /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{1,70}(?:\.[a-z]{1,70})?$/.test(
          this.state.email
        )
      ) {
        passed.email = true;
        this.setState(initialState)
      } else {
       /*  errors += errorMessages.email; */
      }
    }
  };

  //eingabe prüfung(regex)

  handleClick(e) {
    e.preventDefault();
    /* e.stopPropagation(); */

    this.setState({
      type: this.state.type === "text" ? "password" : "text"
    });
  }

  render() {
    return (
      
      <div className="container">
        <h4>Please Log In</h4>
        
        <div className="login">
        <form onSubmit={this.handleSubmit}>
          {this.state.errors && <ErrorMessage message={this.state.errors} />}
          <div className="form-group">
            <label htmlFor="email" />
            <input
              id="email"
              className="form-control"
              type="text"
              onChange={this.handleChange}
              placeholder="Enter Your Username"
            />

            <input
              id="password"
              className="form-control"
              type={this.state.type}
              onChange={this.handleChange}
              placeholder="Enter Password"
            />

            <span className="box" onClick={this.handleClick}>
              {" "}
              {this.state.type === "password"
                ? "show password"
                : "hide password"}{" "}
            </span>

            <hr />
            <button
              disabled={!this.state.valid}
              className="btn btn-outline-secondary"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    
    );
  }
}

export default Login;
