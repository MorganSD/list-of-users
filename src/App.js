import React, { Component } from "react";
import "./components/style/style.css";
import HeaderSec from "./components/navbar";
import "./App.css";
import "./fontawesome/css/all.css";
import UserList from "./components/user-list";
import UserDetail from "./components/user-details";
import Footer from "./components/footer";
import Tags from "./components/metaTags";
import Form from "./components/form";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./animate.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Tags />

        <Router>
          <HeaderSec />

          <Route exact path="/" component={UserList} />
          <Route path="/detail/:id" component={UserDetail} />
          <Route path="/addUser" component={Form} />
        </Router>

        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
