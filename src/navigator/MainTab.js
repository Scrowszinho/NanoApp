import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../views/HomeScreen';
import TabAboutScreen from '../views/AboutScreen';
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';

export default function MainTab() {
    return(
    <Tab.Navigator
    screenOptions={({route})=>({
    tabBarIcon: ({focused, color, size}) => {
    let imgSrc = null;

    switch(route.name){
    case 'TabHome':
    imgSrc = require('../img/a.png');
    break;
    case 'About' :
        imgSrc = require('../img/ah.png');
        break;
    }

     return <Image source={imgSrc} style={{width:24 , height:24}} />;
    }
    })}
    >
        <Tab.Screen name='TabHome' component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name='About' component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
    </Tab.Navigator>
    );
}