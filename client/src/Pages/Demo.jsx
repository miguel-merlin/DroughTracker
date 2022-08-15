import React, { useState, useEffect } from 'react';
import AppBar from "../Components/AppBar";
import DropDownStations from '../Components/DropDownStations';
import { getAvailableStation, getPrediction } from "../Services/demoServices";

const Demo = () => {
    const [availableStations, setAvailableStations] = useState([]);
    const [stationId, setStationId] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleChangeDropDown = (event) => {
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
        getAvailableStation()
            .then(result => {
                let len = result.data.stations.length
                for (let i = 0; i < len; i++) {
                    setAvailableStations(prevArray => [...prevArray, result.data.stations[i]])
                }
            })
            .catch(function (error) {
                setAvailableStations(["No stations available"])
                setErrMsg("Error: No stations could be loaded")
            })
    }, [])

    return (
        <>
            <AppBar />
            <DropDownStations arrayStations={availableStations} onChange={handleChangeDropDown} onClick={handleClickDropDown}/>
        </>
    )
}

export default Demo;