import { useState } from "react";
import userData from "./assets/datausers.json";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");
  const allUsers = userData.results;

  return (
    <>
      <h1>Randomusers</h1>
      <div className="searchInput">
        <input 
        type="text" 
        placeholder="Search ..." 
        value={search}
        />
      </div>
      <section className="userCards">
        {allUsers.map((user) => (
          <div key={user.login.uuid} className="userCard">
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
  );
}

export default Search;
