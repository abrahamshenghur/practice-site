import React from "react";
import {  Link } from "react-router-dom";


function Footer() {
    return (
        <div className='footerStyle flex-container'>
        <div>
          <h3>CONTACT US</h3>
          <p>
            <span className="textColorGray">PHONE:</span>
            <br />
            (555) 555-5555
          </p>
          <p>
            <span className="textColorGray">EMAIL:</span>
            <br />
            <a href='https://www.google.com' className='textColorWhite'>info@dealersite.com</a>
          </p>
          <p>
            <span className="textColorGray">ADDRESS:</span>
            <br />
            123 Maple St.
            <br />
            Somewhere, SS 38382
          </p>
        </div>
        <div>
          <h3>OPENING HOURS</h3>
          <p className="textColorGray">(By appointment)</p>
          <p>
            <span className="textColorGray">MON: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">TUE: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">WED: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">THU: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">FRI: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">SAT: </span>
            9:00am - 5:30pm
            <br />
            <span className="textColorGray">SUN: </span>
            CLOSED
            <br />
          </p>
        </div>
        <div>
          <h3>LINKS</h3>
          <ul className="no-bullets">
            <li>
              <Link className="textColorWhite" to="/home">HOME</Link>
            </li>
            <li>
              <Link className="textColorWhite" to="/inventory">INVENTORY</Link>
            </li>
            <li>
              <Link className="textColorWhite" to="/about">ABOUT</Link>
            </li>
            <li>
              <Link className="textColorWhite" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>SOCIAL MEDIA</h3>
          <ul className="flex-container justify-between no-bullets">
            <li>
              <a  className="textColorWhite" href="https://www.youtube.com">Youtube</a>
            </li>
            <li>
            <a  className="textColorWhite" href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
            <a  className="textColorWhite" href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Footer;