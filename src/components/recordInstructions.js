import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class recordInstructions extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View><Text>Record Instructions</Text></View>
                <View style={styles.cameraContainer}>
                    <Text>Video Container</Text>
                </View>
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
    },
    cameraContainer: {
        backgroundColor: '#000000',
        height: 50
    }
});
