import React from "react";
import Nav from "react-bootstrap/Nav";

const NavMenu = () => {
  return (
    <Nav className="nav-text">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/reviews">Reviews</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/categories">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/users">Users</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
