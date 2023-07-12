import React, { useState, useEffect } from "react";
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
import location_filter from '../assets/mobile/icon-filter.svg'
import check from "../images/icon-check.svg";
import det from "../SomeDetails";

function HomeNav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {windowWidth > 554 ? (
        <Container className="containernav">
          <Navbar bg="tranparent" expand="lg" className="navbar">
            <Form className="d-flex ">
              {windowWidth > 768 ? (
                <input
                  className="input-search"
                  type="text"
                  placeholder="Filter by title, companies, expertise..."
                  style={{
                    border: "none",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                ></input>
              ) : (
                <input
                  className="input-search"
                  type="text"
                  placeholder="Filter by title..."
                  style={{
                    border: "none",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                ></input>
              )}
              <img className="search" src={search}></img>

              <input
                className="input-location"
                type="text"
                placeholder="Filter by location..."
              />
              <img className="location" src={location}></img>
              {windowWidth > 768 ? (
                <div
                  className="input-check"
                  type="none"
                  style={{
                    // width: '10000px',
                    border: "none",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <h4 className="h4-foot">Full Time Only</h4>
                </div>
              ) : (
                <div
                  className="input-check"
                  type="none"
                  style={{
                    // width: '10000px',
                    border: "none",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <h4 className="h4-foot">Full Time</h4>
                </div>
              )}

              <label class="checkbox-container">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <button className="button-search">Search</button>
            </Form>
          </Navbar>
        </Container>
      ) : (
        <div className="mobile-nav">
          <input
            className="input-location"
            type="text"
            placeholder="Filter by location..."
          />
          <img className="location-mobile" src={location_filter}></img>
          <button className="button-search"><img className="" style={{ filter: 'brightness(0) invert(1)' }} src={search}></img></button>
        </div>
      )}
    </div>
  );
}

export default HomeNav;
