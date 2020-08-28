import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';
import './About.css'

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
              <a href="https://www.instagram.com/grace_giversmw/"><i className="fab fa-instagram-square"></i></a>
              <a target="_blank"  href="https://www.facebook.com/gracegivermw.malawi"><i className="fab fa-facebook-square"></i></a>
              <a target="_blank"  href="https://www.twitter.com/GiversGrace/"><i className="fab fa-twitter-square"></i> </a>
          </div>
        </div>
    )
}

export default About;