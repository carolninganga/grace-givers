
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

                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Home;