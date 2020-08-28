
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
                        <div>
                            <img src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fhomepagelogo.png?v=1598568102862" />
                        </div>
                        <div className="discription">
                            <h2> Our mission</h2>
                            <p className="mission">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <div className="sociallinks">
                            <a href="carolninganga@gmail.com"><i className="fab fa-instagram-square"></i></a>
                            <a target="_blank"  href="https://github.com/carolninganga"><i className="fab fa-facebook-square"></i></a>
                            <a target="_blank"  href="https://www.linkedin.com/in/carolineninganga/"><i className="fab fa-twitter-square"></i> </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Home;