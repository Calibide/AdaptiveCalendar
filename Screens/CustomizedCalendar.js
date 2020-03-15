//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { CalendarList } from 'react-native-calendars'
import moment from 'moment'

import Header from '../Components/Calendar/Header'
import Footer from '../Components/Calendar/Footer'

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(365, 'days').format(_format)

class CustomizedCalendar extends Component {

    initialState = {
        [_today]: {disabled: true}
    }

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            note: '',
            _markedDates: this.initialState
        }
    }

    onDaySelect = (day) => {
        const _selectedDay = moment(day.dateString).format(_format);
        
        let marked = true;
        if (this.state._markedDates[_selectedDay]) {
          // Already in marked dates, so reverse current marked state
          marked = !this.state._markedDates[_selectedDay].marked;
        }
        
        // Create a new object using object property spread since it should be immutable
        // Reading: https://davidwalsh.name/merge-objects
        const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { marked } } }
        
        // Triggers component to render again, picking up the new state
        this.setState({ _markedDates: updatedMarkedDates });
    }

    async componentDidMount() {
        const noteArray = await AsyncStorage.getItem('noteArray');
        if (noteArray && noteArray.length > 0) {
            this.setState({
                noteArray: JSON.parse(noteArray)
            })
        }
    }

    updateAsyncStorage(noteArray) {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.removeItem('noteArray');
                await AsyncStorage.setItem('noteArray', JSON.stringify(noteArray));
                return resolve(true);
            }
            catch (e) {
                return reject(e);
            }
        })
    }

    cloneNotes() {
        return [...this.state.noteArray]
    }

    async addNote() {
        if (this.state.note.length <= 0)
            return;
        try {
            const noteArray = this.cloneNotes();
            noteArray.push(this.state.note);
            await this.updateAsyncStorage(noteArray);

            this.setState({
                noteArray: noteArray,
                note: ''
            })
        }
        catch (e) {
            alert(e);
        }
    }

    async removeNotes(i) {
        try {
            const noteArray = this.cloneNotes();
            noteArray.splice(i, 1);

            await this.updateAsyncStorage(noteArray);
            this.setState({ noteArray: noteArray });
        }
        catch (e) {
            alert(e);
        }
    }

    renderNotes() {
        return this.state.noteArray.map((note, i) => {
            return (
                <TouchableOpacity
                    key={i} style={styles.note}
                    onPress={() => this.removeNotes(i)}
                >
                    <Text style={styles.noteText}>
                        {note}
                    </Text>
                </TouchableOpacity>
            )
        })
    }
    render() {
        return (
            <View>
                <View style={{ backgroundColor: 'gray' }}>
                    <CalendarList
                        style={{
                            borderwidth: 1,
                            borderColor: 'white',
                            backgroundColor: 'gray',
                            foregroundColor: 'gray',

                        }}
                        horizontal={true}
                        pagingEnabled={true}
                        minDate={_today}
                        maxDate={_maxDate}
                        onDayPress={this.onDaySelect}
                        markedDates={this.state._markedDates}
                    />
                </View>
                    <Header title={'Tasks for this day'} />

                    <ScrollView style={styles.scrollViewContainer}>
                        {this.renderNotes()}
                    </ScrollView>

                    <Footer
                        onChangeText={(note) => this.setState({ note })}
                        inputValue={this.state.note}
                        onNoteAdd={() => this.addNote()}
                    />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    scrollView: {
        maxHeight: '82%',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    note: {
        margin: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderRadius: 10,
    },
    noteText: {
        fontSize: 14,
        padding: 20,
    }
});

//make this component available to the app
export default CustomizedCalendar;
