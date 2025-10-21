import userData from "./assets/datausers.json";
import './App.css'

function App() {
  const allUsers = userData.results;

  return (
    <>
      <h1>Randomusers</h1>
      <section className="userCards">
        {allUsers.map((user) => (
          <div
            key={user.login.uuid}
            className="userCard"
          >
            <img src={user.picture.large} alt="" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.location.city}</p>
            <p>{user.dob.age} ans</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
