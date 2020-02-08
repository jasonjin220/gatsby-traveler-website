import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="footer-primary__wrapper">
            <div className="footer-primary__col footer-primary__col--1">
              <div className="footer-primary__sub1">
                <h3 className="footer-primary__title">Contact us</h3>
                <p className="footer-primary__text">
                  Traveler Road,
                  <br />
                  London,
                  <br />
                  E8 4AH
                </p>
                <p className="footer-primary__phone">
                  <a href="tel:+44 (0)7966 266711">+44 (0)7966 266711</a>
                </p>
                <p className="footer-primary__email">
                  <a href="mailto:hello@traveler.co.uk">hello@traveler.co.uk</a>
                </p>
              </div>
              <div className="footer-primary__sub2">
                <h3 className="footer-primary__title">Follow Us</h3>

                <div className="footer-primary__social-links">
                  <a
                    className="footer-primary__social-icon"
                    href="https://www.tripadvisor.co.uk/"
                  >
                    <FaTripadvisor />
                  </a>
                  <a
                    className="footer-primary__social-icon"
                    href="https://www.instagram.com/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="footer-primary__social-icon"
                    href="https://twitter.com/"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="footer-primary__social-icon"
                    href="https://en-gb.facebook.com/"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-primary__col footer-primary__col--2">
              <div className="footer-primary__sub1">
                <h3 className="footer-primary__title">Information</h3>

                <nav>
                  <ol className="footer-primary__nav">
                    <li className="footer-primary__nav__item">
                      <a href="#">Booking Conditions</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Package Travel Information</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Travel Advice</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Brexit Travel Advice</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Essential Information</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Website Disclaimer</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="footer-primary__sub2">
                <h3 className="footer-primary__title">Corporate</h3>

                <nav>
                  <ol className="footer-primary__nav">
                    <li className="footer-primary__nav__item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Why work with us</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="footer-primary__col footer-primary__col--3">
              <div className="footer-primary__sub1">
                <h3 className="footer-primary__title">Customer Support</h3>

                <nav>
                  <ol className="footer-primary__nav">
                    <li className="footer-primary__nav__item">
                      <a href="#">About Us</a>
                    </li>

                    <li className="footer-primary__nav__item">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Private Group Tours</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Frequently Asked Questions</a>
                    </li>
                    <li className="footer-primary__nav__item">
                      <a href="#">Even More Reasons to Book with Us</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="footer-primary__sub2">
                <h3 className="footer-primary__title">Sign up to newsletter</h3>

                <form className="footer-primary__form" action="">
                  <label
                    className="footer-primary__form-label"
                    htmlFor="newsletter-input"
                  >
                    Email Address
                  </label>
                  <input
                    id="newsletter-input"
                    className="footer-primary__form-input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                  <button className="footer-primary__form-btn">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
