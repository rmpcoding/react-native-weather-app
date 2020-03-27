import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import apiCall from './API/API'; //remember to change this afterward

export default function App() {
    const [outputText, setOutputText] = useState(
        "Hello, World! What's going on?"
    );
    const [weatherText, setWeatherText] = useState('Check me out!');

    return (
        <View style={styles.container}>
            <Text>{outputText}</Text>
            <Button
                title="Change text"
                onPress={() => setOutputText('YAY! You pressed me! :)')}
            />
            <Text>helloooo</Text>
            <Button
                title="Weather Data"
                onPress={() => setWeatherText("meh")}
            />
            <Text>{weatherText}</Text>
            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
