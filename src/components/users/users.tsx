import React, { Component } from "react";
import UsersModel from "../../models/users.model";

type Props = {};

type UserState = {
  users: UsersModel[];
};

export default class Users extends Component<Props, UserState> {
  state = {
    users: new Array<UsersModel>(),
  };

  async componentDidMount() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (res.ok) {
      let users: UsersModel[] = await res.json();
      this.setState({ users });
    }
  }

  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}