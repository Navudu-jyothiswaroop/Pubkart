import React from 'react'
import { Link, Outlet } from "react-router-dom";
import "./Auth.css"
type Props = {}

export default function Auth({ }: Props) {
    return (
        <div className='card p-3'>
            <div className="sub-nav">
                <div className="sub-nav-row">
                    <Link to="/login/signin" className="sub-nav-btn">SignIn</Link>
                </div> 
                <div className="sub-nav-row">
                    <Link to="/login/signup" className="sub-nav-btn">SignUp</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}