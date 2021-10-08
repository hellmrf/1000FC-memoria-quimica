import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Game from '../screens/Game';
import Subjects from '../screens/Subjects';
import Config from '../screens/Config';
import ChCharacter from '../screens/ChCharacter';
import RaffleCharacter from '../screens/RaffleCharacter';

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Config" component={Config} />
    <Stack.Screen name="Subjects" component={Subjects} />
    <Stack.Screen name="ChCharacter" component={ChCharacter} />
    <Stack.Screen name='RaffleCharacter' component={RaffleCharacter} />
    <Stack.Screen name="Game" component={Game} />
  </Stack.Navigator>
);
