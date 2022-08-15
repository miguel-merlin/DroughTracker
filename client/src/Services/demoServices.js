import axios from "../Api/axiosML";

const GET_STATIONS = ""


const getAvailableStation = async () => {
    await axios.get(GET_STATIONS)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        })
}

export {
    getAvailableStation
}