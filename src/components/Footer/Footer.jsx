import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <div>
          <p>+254 798551778</p>
          <p>gregorymark254@gmail.com</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className="footer_title_box">
          <p> Contact Us</p>
          <form>
            <input type="text" name="fname" id="name" placeholder="Name" required/>
            <input type="email" name="email" id="name" placeholder="Email" required /> <br/>
            <button className="btn_form" type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer_last">
        <span>Quick Links</span>
        <div className="footer_link_box">
          <Link to={"/basket"}>Basket</Link>
          <Link to={"/favorite"}>Favourite</Link>
        </div>
      </div>
    </footer>
  );
}
