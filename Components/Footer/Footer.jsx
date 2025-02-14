import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sequi?
            Voluptatem atque at non molestiae ullam quo enim iure illum!
            Corporis a ducimus debitis est autem dolorem, porro voluptas
            obcaecati?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9198955237</li>
            <li>dydevil1407@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        Copyright 2025 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
}
