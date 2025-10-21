import { useState } from "react";
import userData from "./assets/datausers.json";
import "./Search.css";

function Search() {
  const allUsers = userData.results;
  const [search, setSearch] = useState("");

  const filtered = allUsers.filter(
    (user) => {
        const name = `${user.name.first} ${user.name.last}`.toLowerCase();
        const city = user.location.city.toLowerCase();
        const age = user.dob.age.toString();
        return (
            name.includes(search.toLowerCase()) || city.includes(search.toLowerCase()) || age.includes(search.toString())
        )
        ;
    });

  return (
    <>
      <h1>Randomusers</h1>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(valeurInput) => setSearch(valeurInput.target.value)}
        />
      </div>
      <section className="userCards">
        {filtered.map((user) => (
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
