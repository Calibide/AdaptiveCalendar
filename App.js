import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'


import Timeline from './Screens/Timeline'
import Discovery from './Screens/Discovery'
import Profile from './Screens/Profile'
import Subscription from './Screens/Subscription'
import CustomizedCalendar from './Screens/CustomizedCalendar'


class App extends React.Component{
  
  render(){
    
    return(
      <View style = {styles.container}>
        <Text ></Text>
      </View>
    )
  }
}

export default createBottomTabNavigator({

  Timeline:{
    screen:Timeline,
    navigationOptions:{
      tabBarLabel: 'TIMELINE',
      tabBarIcon: ({tintColor}) => (<Image source = {require ('./assets/Timeline.png')}
      style = {{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  },
  Discovery:{
    screen:Discovery,
    navigationOptions:{
      tabBarLabel: 'DISCOVERY',
      tabBarIcon: ({tintColor}) => (<Image source = {require ('./assets/Discovery.png')}
      style = {{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  },
  Subscription:{
    screen:Subscription,
    navigationOptions:{
      tabBarLabel: 'SUBSCRIPTION',
      tabBarIcon: ({tintColor}) => (<Image source = {require ('./assets/Subscription.png')}
      style = {{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (<Image source = {require ('./assets/Profile.png')}
      style = {{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  },
  CustomizedCalendar:{
    screen:CustomizedCalendar,
    navigationOptions:{
      tabBarLabel: 'CUSTOMIZED CALENDAR',
      tabBarIcon: ({tintColor}) => (<Image source = {require ('./assets/Customized_calendar.png')}
      style = {{height: 24, width: 24, tintColor: tintColor}}/>
      )
    }
  }
}, {
      tabBarOptions : {
        activeTintColor : 'red',
        inactiveTintColor : 'grey',
        style: {
          backgroundColor : 'white',
          borderTopWidth : 0,
          shadowOffset : {width : 5, height : 3},
          shadowColor : 'black',
          shadowOpacity : .5,
          elevation : 5
        }
      }
    }
)