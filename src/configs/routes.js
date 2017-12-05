//https://www.youtube.com/watch?v=C96piR3FRww

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import SplashScreen from "../components/splash-screen";
import HomeScreen from "../components/home";


export const HomeNavigation = TabNavigator({
    RecordScreen: { screen: SplashScreen },
    RateScreen: { screen: HomeScreen }
});


export const MainNavigation = StackNavigator({
    Splash: {
        screen: SplashScreen
    },
    RecordScreen: { screen: HomeScreen }
}, {
    mode: 'model',
    headerMode: 'none'
});