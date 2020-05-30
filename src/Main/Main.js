import React, { Component } from "react";
import "./Main.css";
import Headshot from "../assets/headshot_noBG.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      zip: 0,
    };
  }

  onChange = (e) => {
    const val = e.target.value;
    console.log(val);
    // this.setState(state => ({
    //     email: e.target.value,
    //     zip: e.target.value
    // }))
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <main>
        <div className="headshot-container">
          <img className="headshot" src={Headshot} alt="Samantha headshot" />
        </div>
        <div className="text-container">
          <h1>
            The <span className="h1-span">Right Choice</span> <br /> for Texas
          </h1>
          <div className="form-container">
            <h3>Join Samantha!</h3>
            <p>Sign up to recieve the latest campaign updates.</p>
            <form onSubmit={this.submitHandler}>
              <input
                type="email"
                placeholder="Email"
                onChange={this.onChange}
              />
              <input type="number" placeholder="Zip" onChange={this.onChange} />
              <button className="join">Join ></button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
