/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';


export default class SplashScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;

        setTimeout( () => navigate('Home'), 2000 );

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require("../images/splashLogo.png")} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
});
