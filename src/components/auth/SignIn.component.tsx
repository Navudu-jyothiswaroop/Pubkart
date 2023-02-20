import React from 'react'

type Props = {}

export default function SignIn({}: Props) {
  return (
    <form >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Sign In</button>
    </form>
  )
}