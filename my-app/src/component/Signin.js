import React from "react";
import "./Signin.css";
import potatoLogo from "../image/potato.png";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passWord: "",
    };
  }
  
  loginHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, passWord } = this.state;
    return (
      <>
        <div className="sigin_main">
          <div className="signin_title">hypotato</div>
          <div className="signin_subtitle">How is your potato?</div>
          <img
            className="signin_potato"
            src={potatoLogo}
            alt="이미지를 찾을 수 없음"
          />
        </div>

        <div className="signin_modal">
          <div>
            <div className="sign_email">Email</div>
            <input
              name="email"
              type="text"
              value={email}
              onChange={this.loginHandler.bind(this)}
            />
          </div>

          <div>
            <div className="sign_password">Password</div>
            <input
              name="passWord"
              type="text"
              value={passWord}
              onChange={this.loginHandler.bind(this)}
            />
          </div>
          <div>
            <button className="sign_google">connect with google</button>
          </div>
          <span>
            <button className="sign_signin">Sign IN</button>
            <button className="sign_signup">Sign UP</button>
          </span>
        </div>
      </>
    );
  }
}

export default Signin;
