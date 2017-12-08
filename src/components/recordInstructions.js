import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class recordInstructions extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Record Instructions</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eaeaea'
    }
});
