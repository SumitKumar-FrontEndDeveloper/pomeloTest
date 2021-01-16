import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./header.css";

const Header = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const gotToSearch = () => {
    if (search) {
      navigation(search);
    }
  };
  const clearSearch = () => {
    setSearch("");
    navigation("");
  };
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="row headerContainer">
      <div className="col-sm-6 col-xs-12 inputContainer">
        <Form.Control
          type="text"
          value={search}
          placeholder="Enter search key"
          onChange={changeSearch}
        />
        {search && (
          <span test-id="cross" className="cross" onClick={clearSearch}>
            X
          </span>
        )}

        <Button
          variant="primary"
          type="submit"
          className="searchButton"
          onClick={gotToSearch}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Header;
