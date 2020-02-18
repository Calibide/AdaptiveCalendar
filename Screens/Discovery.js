//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions} from 'react-native';
import Category from '../Components/Discovery/Category'
import Events from '../Components/Discovery/Events'

const {height, width} = Dimensions.get('window')

class Discovery extends Component {

    componentWillMount(){
        this.startHeaderHeight = 80
        if (Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style = {{flex : 1}}>
                <View style = {{flex : 1}}>
                    <View style = {{height : this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth : 1, borderBottomColor : '#dddddd'}}>
                        <View style = {{flexDirection : 'row',
                                        padding : 10,
                                        backgroundColor : 'white', 
                                        margin : 20,
                                        shadowOffset : {width : 0, height : 0},
                                        shadowColor : 'black',
                                        shadowOpacity : .2,
                                        elevation : 1,
                                        marginTop : Platform.OS == 'android' ? '30' : null
                                        }}>
                            <TextInput 
                            underlineColorAndroid = "transparent"
                            placeholder = 'Search for an event' 
                            placeholderTextColor = 'grey' 
                            style = {{flex : 1, fontWeight : '700', backgroundColor : 'white'}}
                            >

                            </TextInput>
                        </View>
                    </View>
                        <ScrollView
                            scrollEventThrottle = {16}
                        >
                            <View style = {{flex : 1, backgroundColor : 'white', paddingTop : 20}}>
                                
                                <Text style = {{fontWeight : '700', fontSize : 24, paddingHorizontal : 20}} >
                                    Discovery Page
                                </Text>
                                
                                <View style = {{marginTop : 20, height : 130}}>

                                    <ScrollView
                                    horizontal= {true}
                                    showsHorizontalScrollIndicator = {false}
                                    >
                                        <Category 
                                            imageUri = {require('../assets/Conference.jpg')}
                                            name = "Conferences" 
                                        />
                                        <Category 
                                            imageUri = {require('../assets/Conference.jpg')}
                                            name = "Conferences" 
                                        />
                                        <Category 
                                            imageUri = {require('../assets/Conference.jpg')}
                                            name = "Conferences" 
                                        />
                                    </ScrollView>

                                </View>
                                <View style = {{marginTop : 40, paddingHorizontal : 20 }}>
                                    <Text style = {{fontSize : 24, fontWeight : '700'}}>
                                        Events you may like
                                    </Text>
                                    <View style = {{width : width-40, height : 200, marginTop : 20}}>
                                        <Image
                                            source = {require('../assets/Conference.jpg')} 
                                            style = {{flex : 1,
                                                width : null,
                                                height : null,
                                                resizeMode : 'cover',
                                                borderRadius : 5,
                                                borderWidth : 1,
                                                borderColor : '#dddddd',}}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style = {{marginTop : 20}}>
                                <Text style = {{fontSize : 24, fontWeight : '700', paddingBottom : 10, paddingHorizontal : 20}}>
                                    Events in your city!
                                </Text>
                                <View style = {{marginTop : 20, paddingHorizontal : 20, flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'space-between'}}>
                                    <Events width = {width} name = "Example" price = "80 SAR" description = "Some description" rating = {4.5}/>
                                    <Events width = {width}/>
                                    <Events width = {width}/>
                                </View>
                            </View>
                        </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default Discovery;
