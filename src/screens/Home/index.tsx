import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

import PlayButton from '../../assets/play_button.svg';
import ConfigButton from '../../assets/config_button.svg';

import AppContext from '../../components/AppContext';

import {
  AtomAnimation,
  AtomAnimationBorder,
  Background,
  Container,
  PlayButtonArea,
  TitleOfTheGame,
  TitleOfTheGameText,
  TitleOfTheGameContainer,
  AnimationContainer,
  PlayButtonContainer,
  playButtonSize,
  ConfigButtonContainer,
  ConfigButtonArea,
} from './styles';

export default () => {
  const navigation = useNavigation();

  const playButtonAction = () => navigation.navigate('Subjects');
  const configButtonAction = () => navigation.navigate('Config');

  const userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;

  return (
    <Container theme={theme}>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={theme.components.homeGradientBackgroundColor}>
        <ConfigButtonContainer>
          <ConfigButtonArea
            onPress={configButtonAction}
            diameter={0.7 * playButtonSize}
            theme={theme}>
            <ConfigButton height={0.3 * playButtonSize} width={0.3 * playButtonSize} />
          </ConfigButtonArea>
        </ConfigButtonContainer>
        <TitleOfTheGameContainer>
          <TitleOfTheGame>
            <TitleOfTheGameText theme={theme}>Jogo</TitleOfTheGameText>
            <TitleOfTheGameText theme={theme}>da</TitleOfTheGameText>
            <TitleOfTheGameText bold theme={theme}>
              Memória
            </TitleOfTheGameText>
          </TitleOfTheGame>
        </TitleOfTheGameContainer>
        <AnimationContainer>
          <AtomAnimationBorder theme={theme}>
            <AtomAnimation source={require('../../assets/atom_animation.gif')} />
          </AtomAnimationBorder>
        </AnimationContainer>
        <PlayButtonContainer>
          <PlayButtonArea onPress={playButtonAction} theme={theme}>
            <PlayButton height={playButtonSize} width={playButtonSize} fill="white" />
          </PlayButtonArea>
        </PlayButtonContainer>
      </Background>
    </Container>
  );
};
