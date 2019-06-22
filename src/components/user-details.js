import React, { Component } from "react";
import { Redirect } from "react-router";
import avatar from "../img/woman-avatar-dark.png";

class UserDetail extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      list: JSON.parse(localStorage.getItem("users")),
      redirectState: false
    };
    this.deleteUser();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    const user = this.state.list.find(element => element.id == id);

    this.setState({
      user
    });
    console.log(this.state.user);
  }

  deleteUser(userId) {
    const list = [...this.state.list];
    const updatedata = this.state.list.filter(user => user.id != userId);

    this.setState({
      list: updatedata,
      redirectState: true
    });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("users", JSON.stringify(nextState.list));
  }

  render() {
    const { from } = this.props.location.state || "/";
    const { redirectState } = this.state;
    return (
      <main>
        <div className="wrap">
          {this.state.user ? (
            <React.Fragment>
              <div className="summery">
                <figure>
                  <img src={avatar} />
                </figure>
                <div className="suumery-info">
                  <h1>{this.state.user.name}</h1>
                  <p>{this.state.user.username} </p>
                  <p>
                    <i class="far fa-envelope" /> {this.state.user.email}
                  </p>
                  <p>
                    <i class="fas fa-phone-alt" /> {this.state.user.phone}
                  </p>
                  <span
                    onClick={e =>
                      window.confirm(
                        "Are you sure you want to delete this user?"
                      ) && this.deleteUser(this.state.user.id)
                    }
                  >
                    <span>delete user</span>
                  </span>
                </div>

                {redirectState && <Redirect to={from} />}
              </div>
              <div className="details">
                <table>
                  <tbody>
                    <tr>
                      <td>id</td>
                      <td>{this.state.user.id}</td>
                    </tr>

                    <tr>
                      <td>street</td>
                      <td>{this.state.user.address.street}</td>
                    </tr>
                    <tr>
                      <td>suite</td>
                      <td>{this.state.user.address.suite}</td>
                    </tr>
                    <tr>
                      <td>city</td>
                      <td>{this.state.user.address.city}</td>
                    </tr>
                    <tr>
                      <td>zip code</td>
                      <td>{this.state.user.address.zipcode}</td>
                    </tr>

                    <tr>
                      <td>website</td>
                      <td>{this.state.user.website}</td>
                    </tr>
                    <tr>
                      <td>company Name</td>
                      <td>{this.state.user.company.name}</td>
                    </tr>
                    <tr>
                      <td>company catchPhrase</td>
                      <td>{this.state.user.company.catchPhrase}</td>
                    </tr>
                    <tr>
                      <td>company business</td>
                      <td>{this.state.user.company.bs}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </React.Fragment>
          ) : (
            <h3>not found</h3>
          )}
        </div>
      </main>
    );
  }
}

export default UserDetail;
