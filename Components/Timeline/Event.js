//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class Event extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.calendarTitle}>
                    <View>
                       <Image />
                       <Text>
                           information about the event + event pictures
                       </Text>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Event;
