import React from "react";
import "../css/footer.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Powered by
        <span> </span>
        <b>
          <a
            rel="noopener noreferrer"
            title="Powered by"
            href="https://ipapi.co/"
            target="_blank"
          >
            IPAPI
          </a>
        </b>
      </p>
      <p>
        {" "}
        Made with <span> </span>
        <AiFillHeart className="heart" />
        <span> </span>
        by
        <b>
          <span> </span>{" "}
          <a
            rel="noopener noreferrer"
            title="Follow Roy"
            href="https://github.com/kochi0903"
          >
            {" "}
            Roy
          </a>
        </b>
      </p>
    </div>
  );
};

export default Footer;
