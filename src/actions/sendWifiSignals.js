import { API } from "react-native-dotenv";
import wifi from "react-native-android-wifi";
import DeviceInfo from "react-native-device-info";
import { SEND_WIFI_ERROR, SEND_WIFI_SUCCESS, SEND_WIFI_START } from "./types";
export const sendWifiSignals = () => {
  return async dispatch => {
    dispatch({ type: SEND_WIFI_START });
    var wifiList = [];
    var mac = await DeviceInfo.getMACAddress();
    var device = mac.replace(/:/g, "").toLowerCase();
    wifi.reScanAndLoadWifiList(
      wifiStringList => {
        wifiList = [].concat(JSON.parse(wifiStringList));
        var lis = wifiList.reduce((previous, item) => {
          previous[item.BSSID] = item.level;
          return previous;
        }, {});
        fetch(API + "/data", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            s: { wifi: lis },
            d: device,
            f: "posifi"
          })
        })
          .then(() => {
            dispatch({ type: SEND_WIFI_SUCCESS });
          })
          .catch(err => {
            dispatch({ type: SEND_WIFI_ERROR, payload: err });
          });
      },
      error => {
        console.log(error);
      }
    );
  };
};
