import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';

const About = () => {
    return (
        <div>
          {/* <div className="row">
          <Team />
          </div> */}
          <div className="row">
          <ContactUs />
          </div>
          <div className="sociallinks">
              <a href="carolninganga@gmail.com"><i className="fab fa-instagram-square"></i></a>
              <a target="_blank"  href="https://github.com/carolninganga"><i className="fab fa-facebook-square"></i></a>
              <a target="_blank"  href="https://www.twitter.com/GiversGrace/"><i className="fab fa-twitter-square"></i> </a>
          </div>
        </div>
    )
}

export default About;