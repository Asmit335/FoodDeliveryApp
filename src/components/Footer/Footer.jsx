import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="footerLeft">
            <img className="logo" src="./images/logo.png" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              pariatur sunt eius repellat natus officiis quos fugiat dolorum.
            </p>
            <div class="footerSocialIcon">
              <a href="https://www.facebook.com" target="_blank">
                <img src="./images/facebook_icon.png" title="Visit Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src="./images/twitter_icon.png" title="Visit Twitter" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img
                  src="./images/linkedin_icon.png"
                  title="Visit LinkedIn"
                  alt="loading"
                />
              </a>
            </div>
          </div>
          <div className="footerCenter">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footeright">
            <h2>Get in Touch</h2>
            <ul>
              <li>+977-9812345678</li>
              <li>
                <a href="mailto:contact@gmail.com">contact@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright 2024 &copy; homeDeliver.com All Right Reverved
        </p>
      </div>
    </>
  );
};

export default Footer;
