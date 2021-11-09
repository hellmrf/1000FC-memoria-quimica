import { Switch, View, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';

import ConfigIcon from '../../assets/config_button.svg';

import { Container, SwitchItem } from './styles';
import AppContext from '../../components/AppContext';

export default () => {
  let userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;
  const setThemeWrapper = userPrefs.setThemeWrapper;

  const toggleColorBlindnessTheme = (isEnabled: boolean) => {
    if (isEnabled) {
      setThemeWrapper('colorblindnesstheme');
      userPrefs.setColorBlindness(true);
    } else {
      setThemeWrapper('maintheme');
      userPrefs.setColorBlindness(false);
    }
  };

  return (
    <Container theme={theme}>
      <SwitchItem
        theme={theme}
        isEnabled={userPrefs.colorBlindness}
        label="Modo Daltônico"
        action={toggleColorBlindnessTheme}
      />
      <SwitchItem theme={theme} label="Som" />
      <SwitchItem theme={theme} label="Vibração" />
      <SwitchItem theme={theme} label="Áudio Descrição" />
    </Container>
  );
};
