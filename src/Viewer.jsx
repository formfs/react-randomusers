import React, { useState } from "react";
import userData from "./assets/datausers.json";
import './Viewer.css';

function Viewer() {
    const allUsers = userData.results;
    const [index, setIndex] = useState(0);

    const nextUser = () => {
        setIndex((userIndex) => {
            const newUserIndex = userIndex + 1;
            // return newUserIndex >= allUsers.length ? 0 : newUserIndex;
             if (newUserIndex >= allUsers.length) {
                return 0;
            } else {
                return newUserIndex;
            }
        });
    };

    const previousUser = () => {
        setIndex((userIndex) => {
            const newUserIndex = userIndex - 1;
            //  return newUserIndex < 0 ? allUsers.length - 1 : newUserIndex;
            if (newUserIndex < 0) {
                return allUsers.length - 1;
            } else {
                return newUserIndex;
            }
        });
    }

    const user = allUsers[index];
    
    return (
        <div className="container">       
         <h1>User Viewer</h1>
         <div className="userCard">
            <img src={user.picture.large} alt="" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.location.city}</p>
            <p>{user.dob.age} ans</p>
          </div>
          
          <div className="userButtons">
            <button onClick={previousUser}>Previous</button>
            <button onClick={nextUser}>Next</button>
          </div>

        <p>User {index + 1} of {allUsers.length}</p>
        </div>
    )
}

export default Viewer