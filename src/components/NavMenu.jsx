import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <Nav className="nav-text">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/reviews">Reviews</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/categories">Categories</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/users">Users</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
