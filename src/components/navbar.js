import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../fontawesome/css/all.css";

class HeaderSec extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollDown: true
    };
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollDown = window.scrollY < 5;
      if (scrollDown !== this.state.scrollDown) {
        this.onScroll(scrollDown);
      }
    });
  }
  onScroll(scrollDown) {
    this.setState({ scrollDown });
  }

  render() {
    let classes = "";
    if (!this.state.scrollDown) {
      classes += "down";
    } else {
      classes -= "down";
    }
    return (
      <header className={classes}>
        <div className="wrap">
          <div>
            <label for="search">
              <i class="fas fa-search" />
            </label>
            <input id="search" type="text" placeholder="search" />
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addUser">Add user</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default HeaderSec;
