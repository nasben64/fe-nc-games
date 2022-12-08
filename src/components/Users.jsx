import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getUsers } from "../apis/users";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <main>
      <h3 className="text-center">List of Users</h3>

      <ul className="single-view-ul">
        {users.map((user) => {
          return (
            <li className="user-card" key={user.username}>
              <div className="user-name-div">
                <p>{user.username}</p>
                <p>{user.name}</p>
              </div>
              <div className="div-center">
                <img
                  className="user-img"
                  src={user.avatar_url}
                  alt={user.username}
                />
              </div>
              <Button
                variant="outline-dark"
                size="lg"
                className="user-button"
                onClick={() => setUser(user)}
              >
                Login
              </Button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Users;
