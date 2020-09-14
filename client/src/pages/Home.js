
import React, { Component } from "react";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css'



class Home extends Component {
   

    render() {
        return (
            <>

            <Container fluid="md">
                <Row>
                    <Col>
                        <div className="logoImg">
                            <img sytle={{width:"300"}} src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fhomepagelogo.png?v=1598568102862" />
                        </div>
                        <div className="discription">
                            <h2> Our mission</h2>
                            <p className="mission">
                            Contribute to national development through constructive and supportive
                            engagement with communities to enable children enjoy life and develop social
                            skills.
                            </p>
                            <h2> Our Vision</h2>
                            <p className="mission">
                            Mobilise communities in advancement of child and women rights and human
                            development by using education, health and environmental programs.
                            </p>
                            <h2> Goals and Objectives</h2>
                            <p className="mission">
                            The goal of Grace Givers is to help children enjoy life and develop their
                            intellectual capacity as they grow to maturity. The organisation will achieve this
                            through the following specific objectives. In addition, we want to empower
                            women in daily activities such as food preparation, health tips and also
                            productive but low cost farming methods.
                            </p>
                            <ul>
                                <li className="listItem">
                                To provide support to children through community based groups such
                                as childcare (feed the children trust) centers, educational centers and
                                other community structures (kitchen, library, and game center).
                                </li>
                                <li className="listItem">
                                To introduce innovative approaches for empowering children, families
                                and communities (training programs).
                                </li>
                                <li className="listItem">
                                To impart knowledge and skills by working with groups of children and
                                women in their communities
                                </li>
                            </ul>
                            {/* <div className="sociallinks">
                            <a href="carolninganga@gmail.com"><i className="fab fa-instagram-square"></i></a>
                            <a target="_blank"  href="https://github.com/carolninganga"><i className="fab fa-facebook-square"></i></a>
                            <a target="_blank"  href="https://www.linkedin.com/in/carolineninganga/"><i className="fab fa-twitter-square"></i> </a>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Home;