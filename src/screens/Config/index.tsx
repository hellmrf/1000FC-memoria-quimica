import { Switch, View, StyleSheet } from 'react-native';
import React, { useContext, useState } from "react";

import ConfigIcon from '../../assets/config_button.svg';


import {
    Container,
    SwitchItem
}
from './styles';
import AppContext from '../../components/AppContext';

export default () => {
  
  const userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;
    
  return (
    <Container theme={theme}>
      <SwitchItem theme={theme}
        label='Modo Daltônico'
      />
      <SwitchItem theme={theme}
        label='Som'
      />
      <SwitchItem theme={theme}
        label='Vibração'
      />
      <SwitchItem theme={theme}
        label='Áudio Descrição'
      />
    </Container>
  );
};

