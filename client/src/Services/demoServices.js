import axios from "../Api/axiosML";

const GET_STATES = "/station/states";
const GET_STATIONS = "/station/stations";
const GET_PRED = "station/prediction";

const getAvailableStates = async () => {
  try {
    const response = await axios.get(GET_STATES);
    return response;
  } catch (error) {
    return error;
  }
};

const getAvailableStation = async (state) => {
  try {
    const response = await axios.get(`${GET_STATIONS}/${state}`);
    console.log(response)
    return response;
  } catch (error) {
    return error;
  }
};

const getPrediction = async (id) => {
  await axios
    .get(
      `${GET_PRED}/${id}`,
      JSON.stringify({
        _id: id,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

export { getAvailableStation, getPrediction, getAvailableStates };
