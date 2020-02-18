//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating'
// create a component
class Events extends Component {
    render() {
        return (
            <View style={{ width: this.props.width/2 - 30, height: this.props.width/2 - 30, borderWidth: .5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={require('../../assets/Conference.jpg')} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style = {{fontSize : 12, color : '#B80F0A'}}>
                        {this.props.name}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                        {this.props.description}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        {this.props.price}
                    </Text>
                    <StarRating 
                    disabled = {true}
                    maxStars = {5}
                    rating = {this.props.rating}
                    starSize = {10}
                    />
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
export default Events;
