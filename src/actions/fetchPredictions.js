import { API } from "react-native-dotenv";
import {
  FETCH_PREDICTIONS_START,
  FETCH_PREDICTIONS_ERROR,
  FETCH_PREDICTIONS_SUCCESS
} from "./types";
import DeviceInfo from "react-native-device-info";

export const fetchPredictions = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PREDICTIONS_START });
    var mac = await DeviceInfo.getMACAddress();
    var device = mac.replace(/:/g, "").toLowerCase();
    return fetch(API + `/api/v1/location/posifi/${device}`)
      .then(res => {
        return res.json().then(data => {
          dispatch({
            type: FETCH_PREDICTIONS_SUCCESS,
            payload: selectBest(data.analysis.guesses)
          });
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_PREDICTIONS_ERROR, payload: err });
      });
  };
};

var selectBest = data => {
  return data[0].probability > 0.3 ? data[0].location : null;
};
