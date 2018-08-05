import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import TourBoxHeader from "../components/TourBoxHeader";
import Tour from "../components/Tour";

export default class TourBox extends Component {
  renderTour = () => {
    return (
      <Tour
        key={this.props.tour.floors[0].floor}
        selectedTour={this.props.tour.floors[0]}
      />
    );
  };

  render() {
    return (
      <View style={styles.tourBox}>
        <TourBoxHeader title={this.props.tour.tourAudience} />
        <View style={styles.tourBoxTours}>
          <ScrollView horizontal={true}>{this.renderTour()}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tourBox: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    height: 350
  },
  tourBoxTours: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row"
  }
});
