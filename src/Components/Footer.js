import React from "react";
import classes from "../Styles/Footer.module.scss";
import Logo from "../images/logo.svg";
import iconEmail from "../images/icon-email.svg";
import iconPhone from "../images/icon-phone.svg";
import facebookIcon from '../images/facebook-square-brands.svg';
import instagramIcon from '../images/instagram-brands.svg';
import twitterIcon from '../images/twitter-square-brands.svg';
import bgFooterTopMobile from '../images/bg-footer-top-mobile.svg';
import bgFooterTopDesktop from '../images/bg-footer-top-desktop.svg';

function Footer() {
  return (
    <div className={classes.allFooter}>
      <img src={bgFooterTopMobile} alt="" className={classes.bgFooterMobile} />
      <img src={bgFooterTopDesktop} alt="" className={classes.bgFooterDesktop} />
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.newsletter}>
          <div className={classes.newsletterContent}>
            <h1>Newsletter</h1>
            <p>
              To recieve tips on how to grow your community, sign up to our weekly
              newsletter. We’ll never send you spam or pass on your email address
            </p>
          </div>
          <div className={classes.subscription}>
            <input type="email" name="email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={classes.contact}>
          <img src={Logo} alt="Logo" className={classes.logo} />
          <p className={classes.textToLogo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
            quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <p className={classes.phone}>
            <img src={iconPhone} alt="phone" />
            <p>Phone: +1-543-123-4567</p>
          </p>
          <p className={classes.email}>
            <img src={iconEmail} alt="email" />
            <p>example@huddle.com</p>
          </p>
          <div className={classes.social}>
            <img src={facebookIcon} alt="facebook" className={classes.facebook}/>
            <img src={instagramIcon} alt="instagram" className={classes.instagram} />
            <img src={twitterIcon} alt="twitter" className={classes.twitter} />
          </div>
        </div>
      </div>
      <footer>
        <p class={classes.attribution}>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Drasenberg/huddle-landing-page-with-curved-sections">Maciej Woźniak</a>.
        </p>
      </footer>
    </div>
    </div>
  );
}

export default Footer;
