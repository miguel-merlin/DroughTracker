import React from 'react';
import AppBar from "../Components/AppBar"
import CarouselDrought from '../Components/CarouselDrought';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <>
            <AppBar />
            <Container>
                <Row>
                    <Col/>
                    <Col xs={10}>
                        <CarouselDrought />
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </>
    )
}

export default Home;