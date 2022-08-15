import axios from "../Api/axiosML";

const GET_STATIONS = ""
const GET_PRED = ""


const getAvailableStation = async () => {
    await axios.get(GET_STATIONS)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        })
}

const getPrediction = async (id) => {
    await axios.get(GET_PRED, JSON.stringify({
        _id: id,
    }), {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        })
}

export {
    getAvailableStation,
    getPrediction,
}