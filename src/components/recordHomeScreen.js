import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Image } from 'react-native';



export default class recordHomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Image source={require("../images/homeLogoRecord.png")} />
                </View>

                <Button
                    onPress={() => this.props.navigation.navigate('RecordInstructions')}
                    title="START"
                />

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
