import { useState } from "react";
import userData from "./assets/datausers.json";
import UserCard from "./UserCard";
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
            <UserCard key={user.login.uuid} user={user} />
        ))}
      </section>
    </>
  );
}

export default Search;
