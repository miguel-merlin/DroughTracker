import React, { useState, useEffect } from 'react';
import AppBar from "../Components/AppBar";
import DropDownDemo from '../Components/DropDownDemo';
import Map from '../Components/Map'
import { getAvailableStation, getPrediction, getAvailableStates } from "../Services/demoServices";

const Demo = () => {
    const [availableStates, setAvailableStates] = useState([]);
    const [availableStations, setAvailableStations] = useState([]);
    const [stationState, setStationState] = useState(undefined);
    const [stationId, setStationId] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleChangeDropDownStates = (event) => {
        event.preventDefault();
        setStationState(event.target.value);
    }

    const handleChangeDropDownStations = (event) => {
        event.preventDefault();
        var id = event.target.value._id
        setStationId(id)
    }

    const handleClickDropDown = () => {
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
                setErrMsg("No se pudieron actualizar las estaciones")
            })
    }, [stationState])

    return (
        <>
            <AppBar />
            <DropDownDemo firstMessage={"Select a state"} array={availableStates} errMsg={errMsg} onChange={handleChangeDropDownStates} />
            <br />
            <DropDownDemo firstMessage={"Select a weather station"} array={availableStations.map(a => a.name)} errMsg={errMsg} onChange={handleChangeDropDownStations} />
        </>
    )
}

export default Demo;