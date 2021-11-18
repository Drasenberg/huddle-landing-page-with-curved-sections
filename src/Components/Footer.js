import React from "react";
import classes from "../Styles/Footer.module.scss";
import Logo from "../images/logo.svg";
import iconEmail from "../images/icon-email.svg";
import iconPhone from "../images/icon-phone.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.newsletter}>
        <h1>Newsletter</h1>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
        <input type="email" name="email" />
        <button>Subscribe</button>
      </div>
      <div className={classes.contact}>
        <img src={Logo} alt="Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <p className={classes.phone}>
          <img src={iconPhone} alt="phone" />
          Phone: +1-543-123-4567
        </p>
        <p className={classes.email}>
          <img src={iconEmail} alt="email" />
          example@huddle.com
        </p>
        <div className={classes.social}></div>
      </div>
      <footer>
        <p class={classes.attribution}>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="/">Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
