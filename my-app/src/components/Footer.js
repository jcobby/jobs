import React, { useEffect, useState } from "react";
import "./Footer.css";
import det from "../SomeDetails";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";

function Footer() {
  const { id } = useParams();

  const filteredItems = det.filter((items) => items.id === parseInt(id));

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
    <div className="divyy">
      {windowWidth > 505 ? (
        <div>
          {filteredItems.map((items) => (
            <div className="det-footer">
              <div className="det-footer-container">
                <h3 className="h3-foot">{items.position}</h3>
                <button className="det-footer-button">Apply Now</button>
              </div>
              <div className="det-footer-desc-container">
                <p className="det-footer-desc">So Digital Inc.</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="det-footer">
          <div className="det-footer-container">
            <button className="det-desc-button">Apply Now</button>
          </div>
        </div>
      )}{" "}
    </div>
  );
}

export default Footer;
