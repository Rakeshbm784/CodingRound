import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <Form inline className=" ml-auto">
        <BsSearch className="icon" />
        <Form.Control
          type="text"
          placeholder="Search"
          className=""
          style={{
            borderRadius: 15,
            width: "500px",
            height: "30px",
            backgroundColor: "#1d2634",
            color: "white",
          }}
        />
        <Button
          variant="outline-success"
          style={{
            borderRadius: 8,
            width: "60px",
            height: "35px",
            backgroundColor: "#1d2634",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </Button>
      </Form>

      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
