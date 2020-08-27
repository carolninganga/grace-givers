
import React, { Component } from "react";
import Card from '../components/Card';
import Store from '../components/Store';
import Footer from '../components/Footer';
// import MapChart from '../components/MapChart/MapChart'
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';
import Form from "../components/Form";
import './home.css'

class Home extends Component {
   

    render() {
        return (
            <Container>
                
                <Footer />
            </Container>
        )
    }
}

export default Home;