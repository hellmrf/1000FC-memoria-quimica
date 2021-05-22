import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { useFonts, Lato_700Bold } from '@expo-google-fonts/lato';
import Preload from './src/screens/Preload';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
  });
  if (!fontsLoaded) return <Preload />;

  console.log('Ok');
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
