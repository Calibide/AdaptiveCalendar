//import liraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { StackNavigator } from "react-navigation";

import  Event  from '../Components/Timeline/Event'
// create a component
class Timeline extends React.Component {
    constructor (){
      super()
      this.state = {
        dataSource : []
      }
    }
    renderItem = ({item}) => {
      return (
        <TouchableOpacity style = {{flexDirection : 'row', flex : 1, marginBottom : 3}} onPress = {() => {this.props.navigation.navigate('Event')}}>
        <Image style = {{width : 100, height : 100, margin : 5}}
          source={{uri : item.image} }
        />
        <View style = {{flex : 1, justifyContent : 'center', marginLeft : 5}}>
          <Text style = {{fontSize : 18, color : 'green', marginBottom : 15}}>
            {item.book_title}
          </Text>
          <Text style = {{fontSize : 16, color : 'red'}}>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
      )
    }

    separator = () => {
      return(
      <View style = {{height : 1, width : '100%', backgroundColor : '#d4d4d4'}}>

      </View>
      )
    }

    componentDidMount(){
      // we need to change the url to each account to match the timeline (calendars and their events) of that specific account
      const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) =>{
        this.setState({
          dataSource: responseJson.book_array
        })
      })
      .catch ((error) => {
        console.log(error)
      })
    }

    render(){
    return (
      <View style = {styles.container}>
        <FlatList 
          data = {this.state.dataSource}
          renderItem = {this.renderItem}
          keyExtractor = {(item, index) => index}
          ItemSeparatorComponent = {this.separator}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
     padding : 15,
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  Calendar : {
    borderColor : 'grey',
    borderWidth : 1,
    width : '90%',
    backgroundColor : '#fff',
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10
  },
  Event : {
    borderColor : 'grey',
    borderWidth : 1,
    backgroundColor : '#fff',
  },
  calendarText : {
    fontSize : 16,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  text : {
    fontSize : 13,
    fontWeight : '700',
    textAlign : 'center'
  }
});

// make this component available to the app
export default StackNavigator({
  Home: {
    screen : Timeline
  },
  Event: {
    screen : Event
  }
})
