import React, { useState, useEffect } from "react";
import { Navbar, Container, Form } from "react-bootstrap";
import "./HomeNav.css";
import search from "../images/icon-search.svg";
import location from "../images/icon-location.svg";
import location_filter from "../assets/mobile/icon-filter.svg";

function HomeNav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleLocationFilterClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  console.log("the popin" + isPopupOpen);

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
              <img className="search" src={search} alt=""></img>

              <input
                className="input-location"
                type="text"
                placeholder="Filter by location..."
              />
              <img className="location" src={location} alt=""></img>
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
          <button
            className="location-mobile"
            onClick={handleLocationFilterClick}
          >
            <img src={location_filter} alt=""></img>
          </button>
          <button className="button-search" onClick={handleLocationFilterClick}>
            <img
              className=""
              style={{ filter: "brightness(0) invert(1)" }}
              src={search}
              alt=""
            ></img>
          </button>

          {isPopupOpen && (
            <div className="popup-container">
              <div className="popup">
                <input
                  className="pop-up-input-location"
                  type="text"
                  placeholder="Filter by location..."
                />
                <img className="pop-up-location" src={location} alt=""></img>

                <div
                  className="pop-up-input-check"
                  type="none"
                  style={{
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
                <button
                  className="pop-up-button-search"
                  onClick={handleClosePopup}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeNav;
