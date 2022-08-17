import React, { useState, useEffect, } from 'react';
import AppBar from "../Components/AppBar";
import DropDownDemo from '../Components/DropDownDemo';
//import Map from '../Components/Map'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { getAvailableStation, getPrediction, getAvailableStates } from "../Services/demoServices";

const Demo = () => {
    const [availableStates, setAvailableStates] = useState([]);
    const [availableStations, setAvailableStations] = useState([]);
    const [stationState, setStationState] = useState(undefined);
    const [stationId, setStationId] = useState(undefined)
    const [errMsg, setErrMsg] = useState('')

    const handleChangeDropDownStates = (event) => {
        event.preventDefault();
        setStationState(event.target.value);
    }

    const handleChangeDropDownStations = (event) => {
        event.preventDefault();
        var id;
        availableStations.forEach((station) => {
            if (station.name === event.target.value) {
                id = station.id
            }
        })
        setStationId(id)
    }

    const handleClickPredict = () => {
        getPrediction(stationId)
            .catch(function (error) {
                setErrMsg("An error ocurred")
            })
    }

    useEffect(() => {
        getAvailableStates()
            .then(response => {
                response.data.data.forEach((state) => {
                    setAvailableStates(prevArray => [...prevArray, state])
                })
            })
            .catch(function (error) {
                setAvailableStates(["No states available"])
                setErrMsg("Error: States could not be loaded")
            })

        getAvailableStation(stationState)
            .then(response => {
                response.data.data.forEach((station) => {
                    setAvailableStations(prevArray => [...prevArray, station])
                })
            })
            .catch(function (error) {
                setErrMsg("Error: Stations could not be loaded")
            })
    }, [stationState])

    return (
        <>
            <AppBar />
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <DropDownDemo firstMessage={"Select a state"} array={availableStates} errMsg={errMsg} onChange={handleChangeDropDownStates} />
                        </Row>
                        <Row>
                            <DropDownDemo firstMessage={"Select a weather station"} array={availableStations.map(a => a.name)} errMsg={errMsg} onChange={handleChangeDropDownStations} />
                        </Row>
                        <Button onClick={handleClickPredict}>Predict!</Button>
                    </Col>
                    <Col>
                        {/* <Map /> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Demo;