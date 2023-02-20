import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import UsersModel from '../../models/users.model';
type Props = {}

export default function UserDetails({}: Props) {
  let {userid} = useParams();
  const [user,setUser] = useState<UsersModel>();
  useEffect(() => {
    (async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);

      if (res.ok) {
        let fetchedUser: UsersModel = await res.json();
        setUser(fetchedUser);
      }
    })();
  },[userid])
  
  return (
    <div className="card">
  <div className="card-header">
    <span className='text-uppercase'>{user?.name}</span> <span className='text-muted'>{user?.email}</span>
  </div>
  <div className="card-body">
    <h5 className="card-title">{user?.company.name} <span className='text-muted'>{user?.company.catchPhrase}</span></h5>
    <p className="card-text">Call at: {user?.phone} </p>
    <p className="card-text">Address: {user?.address.street} {user?.address.suite} {user?.address.city}, {user?.address.zipcode}</p>
    <a href={`https://${user?.website}`} className="btn btn-primary">{user?.website}</a>
  </div>
</div>
  )
}