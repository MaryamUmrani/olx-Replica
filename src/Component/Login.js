import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // sign in
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        /// create a user when logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <EmailIcon className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Enter Your Email!!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter Your Password!!"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-dark lol_btn"
            onClick={login}
          >
            Sign In
          </button>
        </form>

        <p>
          The OLX marketplace is a platform for buying and selling services and
          goods such as electronics, fashion items, furniture, household goods,
          cars and bikes. In 2014..
        </p>

        <button className="btn btn-danger lol_btn" onClick={register}>
          Create your Olx Account
        </button>
      </div>
    </div>
  );
}

export default Login;

// import React from "react";
// import "./Login.css";
// import { FaFacebookSquare } from "react-icons/fa";

// function Login() {
//   return (
//     <div>
//       <FaFacebookSquare className="facebook__icon" />
//       <div>
//         <button className="btn btn-dark btn__lol">FACEBOOK LOGIN</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
