import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { useFonts } from 'expo-font';
import Preload from './src/screens/Preload';
import AppContext from './src/components/AppContext';
import maintheme from './src/themes/maintheme';



export default function App() {
  const [fontsLoaded] = useFonts({
    AileronHeavy: require('./src/assets/fonts/aileron/Aileron-Heavy.otf'),
    AileronSemiBold: require('./src/assets/fonts/aileron/Aileron-SemiBold.otf'),
    LoveloBlack: require('./src/assets/fonts/lovelo/Lovelo_Black.otf'),
    LoveloLineBold: require('./src/assets/fonts/lovelo/Lovelo_Line_Bold.otf'),
  });

  const [themeName, setThemeName] = useState('main');
  const theme = maintheme;

  const userPrefs = {
    theme,
  };

  if (!fontsLoaded) return <Preload />;

  return (
    <AppContext.Provider value={userPrefs}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
