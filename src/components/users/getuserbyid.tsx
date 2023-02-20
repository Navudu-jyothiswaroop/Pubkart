import React, { useEffect, useState } from "react";
import UsersModel from "../../models/users.model";

export default function GetUserById() {
  let [userInput, setUserInput] = useState<number>(1);
  let [user, setuser] = useState<UsersModel>();
  useEffect(() => {
    (async () => {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userInput,
      );

      if (res.ok) {
        let user: UsersModel = await res.json();
        setuser(user);
      }
    })();
  }, [userInput]);
  let snippet;

  return (
    <div>
      <h2>User details</h2>
      <label htmlFor="txtUserId">Enter User Id : </label>
      <input
        type="text"
        id="txtUserId"
        value={userInput}
        onChange={e => setUserInput(+e.target.value)}
      />
      <h3>{user?.name}</h3>
    </div>
  );
}
