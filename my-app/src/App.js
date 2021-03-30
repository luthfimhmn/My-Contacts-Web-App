import './App.css';
import React, { useState } from 'react'
import User from './components/User'
import FormUser from './components/FormUser'
import Navbar from './components/NavBar'
import useFetch from './helpers/hooks/useFetch';

function App () {
  const {data: users, setData: setUsers} = useFetch('https://reqres.in/api/users')
  const [name] = useState('Luthfi')

  function addUser (user) {
    setUsers(users.concat(user))
  }

  return (
    <div className="container">
      <Navbar name={name}/>

      <h2>List of User</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
                <User
                  user={user}
                  index={index}
                  key={user.id}>
                </User>
              )
            })
          }
        </tbody>
      </table><br/><br/>

      <FormUser addUser={addUser} users={users}></FormUser>
    </div>
  )
}

export default App;
