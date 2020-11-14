import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Mainhome from "./Component/Home";
import Login from "./Component/Login";
import Checktotal from "./Component/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Component/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // Now adding special word UseEffect
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        /// then user is login
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        /// the user is looged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      ///Any cleanup operation go in here
      unsubcribe();
    };
  }, []);
  console.log("USER IS RUNNING", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Mainhome}>
            <Navbar />
            <Mainhome />
          </Route>

          <Route path="/login" component={Login}>
            <Login />
          </Route>

          <Route path="/checkout" component={Checktotal}>
            <Navbar />
            <Checktotal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
