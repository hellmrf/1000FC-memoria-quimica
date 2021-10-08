import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { useFonts } from 'expo-font';
import Preload from './src/screens/Preload';

export default function App() {
  const [fontsLoaded] = useFonts({
    AileronHeavy: require('./src/assets/fonts/aileron/Aileron-Heavy.otf'),
    AileronSemiBold: require('./src/assets/fonts/aileron/Aileron-SemiBold.otf'),
    LoveloBlack: require('./src/assets/fonts/lovelo/Lovelo_Black.otf'),
    LoveloLineBold: require('./src/assets/fonts/lovelo/Lovelo_Line_Bold.otf'),
  });

  if (!fontsLoaded) return <Preload />;

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
