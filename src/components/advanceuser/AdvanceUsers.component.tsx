import React, { useEffect, useState } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import UsersModel from "../../models/users.model";

type Props = {}

export default function AdvanceUsers({ }: Props) {

  let [users, setUsers] = useState(new Array<UsersModel>());
  let navigate = useNavigate();
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
    snippet = users.map(user => <li key={user.id} className="list-group-item">
      <button className="btn btn-outline-success my-2"
        // onClick={() => navigate("/",{replace:true})}
        onClick={() => navigate(`/advance-users/${user.id}`)}
      >
        {user.name}
      </button>
      </li>);
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
      <div className="col-md-8 mt-5">
      <Outlet />
      </div>
    </div>
  )
}