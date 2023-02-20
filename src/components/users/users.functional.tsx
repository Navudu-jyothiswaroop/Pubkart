import React, { useEffect, useState } from "react";
import UsersModel from "../../models/users.model";
import {Link} from "react-router-dom";

export default function UsersFunctional() {
  let [users, setUsers] = useState(new Array<UsersModel>());
  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (res.ok) {
        let users: UsersModel[] = await res.json();
        setUsers(users);
      }
    })();
  });
  let snippet;
  if (users.length) {
    snippet = users.map(user => <li key={user.id} className="list-group-item"><Link to={`/user-details/${user.id}`}>{user.name}</Link></li>);
  } else {
    snippet = (
      <img src="https://i.gifer.com/CVyf.gif" height="200px" width="300px" />
    );
  }

  return (
    <div className="row justify-content-md-center m-4">
      <div className="col-md-4">
        <h2>List of Users</h2>
        <ul className="list-group">{snippet}</ul>
      </div>
    </div>
  );
}
