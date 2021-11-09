import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { avatars } from '../components/CharachterIcons';

import Home from '../screens/Home';
import Game from '../screens/Game';
import Subjects from '../screens/Subjects';
import Config from '../screens/Config';
import ChoosePlayers from '../screens/ChoosePlayers';
import ShufflePlayers from '../screens/ShufflePlayers';

export type StackParamList = {
  Home: undefined;
  Config: undefined;
  Subjects: undefined;
  ChoosePlayers: undefined;
  ShufflePlayers: { players: Array<keyof typeof avatars> };
  Game: { players: Array<keyof typeof avatars> };
};

const Stack = createStackNavigator<StackParamList>();
export default () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Config" component={Config} />
    <Stack.Screen name="Subjects" component={Subjects} />
    <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
    <Stack.Screen name="ShufflePlayers" component={ShufflePlayers} />
    <Stack.Screen name="Game" component={Game} />
  </Stack.Navigator>
);
