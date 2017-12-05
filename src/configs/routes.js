//https://www.youtube.com/watch?v=C96piR3FRww

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icons } from 'react-native-elements';

import SplashScreen from "../components/splash-screen";
import HomeScreen from "../components/home";


const HomeNavigation = TabNavigator({
    RecordScreen: { screen: SplashScreen },
    RateScreen: { screen: HomeScreen }
});


const MainNaviation = StackNavigator({
    Splash: { screen: SplashScreen },
    Info: { screen: HomeScreen },
    RecordScreen: { screen: HomeScreen }
});