import { useSelector } from 'react-redux'
import User from '../components/User'
import Navbar from '../components/NavBar'


function Home () {
  const contacts = useSelector(state => state.contacts.data)

  return (
    <>
      <Navbar/>
      <div className="container">

        <h2>List of Contacts</h2>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((user, index) => {
                return (
                  <User
                    user={user}
                    index={index}
                    key={user.id}
                    category='contacts'
                    >
                  </User>
                )
              })
            }
          </tbody>
        </table><br/><br/>
      </div>
    </>
  )
}

export default Home;