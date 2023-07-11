import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Form,
  Button,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import "./HomeNav.css";
import search from "../images/icon-search.svg";
import location from "../images/icon-location.svg";
import check from "../images/icon-check.svg";
import det from "../SomeDetails";

function HomeNav() {
  return (
    <div>
      <Container className="containernav">
        <Navbar bg="tranparent" expand="lg" className="navbar">
          <Form className="d-flex " style={{width:"100%"}}>
            <input
              className="input-search"
              type="text"
              placeholder="Filter by title, companies, expertise..."
              style={{
                width: "530px",
                height: "90px",
                border: "none",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            ></input>
            <img className="search" src={search}></img>

            <input
              className="input-location"
              type="text"
              placeholder="Filter by location"
            />
            <img className="location" src={location}></img>

            <div
              className="input-check"
              type="none"
              placeholder="Full Time Only"
              style={{
                width: "410px",
                border: "none",
                borderBottomRightRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <h4 className="h4-foot">Full Time Only</h4>
            </div>

            <label class="checkbox-container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <button className="button-search">Search</button>
          </Form>
        </Navbar>
      </Container>
    </div>
  );
}

export default HomeNav;
