import React from 'react';
import maintheme, { Theme } from '../themes';

export interface AppContextInterface {
  theme: Theme;
  colorBlindness: boolean;
  sound: boolean;
  vibrate: boolean;
  talk: boolean;
  setColorBlindness: (colorBlindness: boolean) => void;
  setThemeWrapper: (newTheme: string) => void;
}

const AppContext = React.createContext<AppContextInterface>({
  theme: maintheme,
  setThemeWrapper: () => {},
  colorBlindness: false,
  setColorBlindness: () => {},
  sound: true,
  vibrate: true,
  talk: false,
});

export default AppContext;
