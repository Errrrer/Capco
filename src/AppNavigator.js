import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomBar from './Components/BottomBar';
import HeaderBar from './Components/HeaderBar';

import News from './Screens/News';
import Regions from './Screens/Regions';
import TV from './Screens/TV';
import Video from './Screens/Video';

const BottomTab = createBottomTabNavigator();

const BottomStack = ({navigation}) => {
  return (
    <BottomTab.Navigator
      initialRouteName="News"
      tabBar={(props) => <BottomBar {...props}/>}
      screenOptions={{header: (props) => <HeaderBar {...props} />}}
    >
      <BottomTab.Screen
        name={"News"}
        component={News}
      />
      <BottomTab.Screen
        name={"Regions"}
        component={Regions}
      />
      <BottomTab.Screen
        name={"TV"}
        component={TV}
      />
      <BottomTab.Screen
        name={"Video"}
        component={Video}
      />
    </BottomTab.Navigator>
  );
};

const AppNavigator = () =>{
  return(
    <NavigationContainer>
      <BottomStack/>
    </NavigationContainer>
  )
}

export default AppNavigator;