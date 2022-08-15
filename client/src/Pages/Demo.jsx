import React, {useState, useEffect} from 'react';
import AppBar from "../Components/AppBar";
import { getAvailableStation } from "../Services/demoServices";

const Demo = () => {
    const [availableStations, setAvailableStations] = useState([]);
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        getAvailableStation()
            .then(result => {
                if (result instanceof Error) {
                    setAvailableStations(prevArray => [...prevArray, 'No stations available'])
                    setErrMsg("Error: No stations could be loaded")
                    return
                }
                let len = result.data.stations.length
                for (let i = 0; i < len; i++) {
                    setAvailableStations(prevArray => [...prevArray, result.data.stations[i]])
                }
            })
    }, [])

    return(
        <AppBar/>
    )
}

export default Demo;