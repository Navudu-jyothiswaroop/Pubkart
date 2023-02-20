import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/account">Account</Link> |{" "}
      <Link to="/dashboard/profile">Profile</Link>
      <Outlet />
    </div>
  );
}
