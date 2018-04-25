import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTourData} from '../actions';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TourBox from '../components/TourBox';

class Tours extends Component {
    componentWillMount = () => {
        this.props.fetchTourData();
    }
    render() {
        let tours = this.props.data;

        if (!tours) {
            
        }
        return (
            <View style={styles.container}>
                <View style={styles.headerFixed}>
                </View>
                <View style={styles.toursContainer}>
                    <ScrollView>
                        <TourBox />
                        <TourBox />
                        <TourBox />
                    </ScrollView>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headerFixed: {
        flex: .1,
        backgroundColor: 'violet'

    },
    toursContainer: {
        flex: .9,
        backgroundColor: 'grey'
    }
});

const mapStateToProps = state => {
    return {
        fetching: state.data.fetching,
        fetched: state.data.fetched,
        error: state.data.error,
        data: state.data.data
    }
}

export default connect(mapStateToProps, { fetchTourData })(Tours);
