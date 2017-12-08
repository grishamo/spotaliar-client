import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class homeRateSection extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require("../images/homeLogoRate.png")} />
                </View>
                <Text>Home Screen</Text>
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
