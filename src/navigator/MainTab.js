import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../views/TabHomeScreen';
import TabAboutScreen from '../views/TabAboutScreen';
import TabBuySell from '../views/TabBuySellScreen';
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
    imgSrc = require('../img/nano.png');
    break;
    case 'About' :
        imgSrc = require('../img/blockchain.png');
        break;
        case 'BuySell' :
            imgSrc = require('../img/money.png');
            break;
        
    }
   
     return <Image source={imgSrc} style={{width:24 , height:24}} />;
    }
    })}
    >
        <Tab.Screen name='Home' component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name='About' component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Tab.Screen name='BuySell' component={TabBuySell} options={{tabBarLabel:'Buy&Sell'}} />

    </Tab.Navigator>
    );
}