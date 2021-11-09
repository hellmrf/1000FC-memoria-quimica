import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { useFonts } from 'expo-font';
import Preload from './src/screens/Preload';
import AppContext from './src/components/AppContext';
import maintheme from './src/themes/maintheme';
import { themes } from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    AileronHeavy: require('./src/assets/fonts/aileron/Aileron-Heavy.otf'),
    AileronSemiBold: require('./src/assets/fonts/aileron/Aileron-SemiBold.otf'),
    LoveloBlack: require('./src/assets/fonts/lovelo/Lovelo_Black.otf'),
    LoveloLineBold: require('./src/assets/fonts/lovelo/Lovelo_Line_Bold.otf'),
  });

  const [theme, setTheme] = useState(maintheme);
  const [colorBlindness, setColorBlindness] = useState(false);

  const setThemeWrapper = (newThemeName: string) => {
    const newTheme = themes[newThemeName];
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  const userPrefs = {
    theme,
    setThemeWrapper,
    colorBlindness,
    setColorBlindness,
    sound: true,
    vibrate: true,
    talk: false,
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
