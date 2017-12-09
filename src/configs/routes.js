//https://www.youtube.com/watch?v=C96piR3FRww

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SplashScreen from "../components/splash-screen";

import HomeRateSection from '../components/homeRateSection';

import RecordHome from '../components/recordHomeScreen';
import RecordInstructions from '../components/recordInstructions';
import Record from '../components/recordScreen';


/**
 * Record Section Navigation
 Record section flow and screens:
 1. Record Home Screen - logo Screen
 2. Record Instructions - Camera permissions, video with silhouette and user behavior instructions
 3. Record Screen - playing video and recording yourself simultaneously
 5. User Video List
 */
const RecordSectionNavigation = StackNavigator({
    RecordHome: {
        screen: RecordHome,
        navigationOptions: {
            header: null
        }
    },
    RecordInstructions: { screen: RecordInstructions },
    RecordScreen: { screen: Record }
}, {
    mode: 'model'
});

/**
 * Home Navigation
 */
const HomeNavigation = TabNavigator({
    RecordSection: {
        screen: RecordSectionNavigation,
        navigationOptions: {
            tabBarLabel: "Record Yourself"
        }
    },
    RateSection: {
        screen: HomeRateSection,
        navigationOptions: {
            tabBarLabel : "Rate Others"
        }
    }
}, {
    mode: 'model'
});



/**
 * Main Navigation
 */
export const MainNavigation = StackNavigator({
    Splash: { screen: SplashScreen },
    HomeSection: { screen: HomeNavigation }
}, {
    mode: 'model',
    headerMode: 'none'
});