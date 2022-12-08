import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="header-text">
      <h2>NC Games Review </h2>
      <h4>{user.name}</h4>
    </div>
  );
};

export default Header;
