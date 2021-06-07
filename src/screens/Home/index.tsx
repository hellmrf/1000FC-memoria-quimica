import React from 'react';
import { View, Dimensions } from 'react-native';

import PlayButton from '../../assets/play_button.svg';
import { appPrimaryTitleSize } from '../../dimensions/text';

import {
  AtomAnimation,
  AtomAnimationBorder,
  Background,
  Container,
  PlayButtonArea,
  TitleOfTheGame,
  TitleOfTheGameText,
} from './styles';

/// Must be sum up 1.
const SCREEN_TITLE_PERC = 0.15;
const SCREEN_ATOM_PERC = 0.55;
const SCREEN_PLAY_PERC = 0.3;

export default () => {
  const screen_width = Dimensions.get('screen').width;
  const screen_height = Dimensions.get('screen').height;

  const atomAnimationPercSize = 0.8;
  const atomBorderPercSize = 0.9;
  const atomMaxSize = Math.min(SCREEN_ATOM_PERC * screen_height, screen_width);

  const playButtonPercSize = 0.75;
  const playButtonSize =
    playButtonPercSize * (SCREEN_PLAY_PERC * screen_height);

  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
        {/* Container para o título */}
        <View flex={SCREEN_TITLE_PERC} zIndex={1} justifyContent="center">
          <TitleOfTheGame
            marginBottom={-1.25 * (SCREEN_TITLE_PERC * screen_height)}>
            <TitleOfTheGameText fontSize={appPrimaryTitleSize}>
              Jogo
            </TitleOfTheGameText>
            <TitleOfTheGameText fontSize={appPrimaryTitleSize}>
              da
            </TitleOfTheGameText>
            <TitleOfTheGameText bold fontSize={appPrimaryTitleSize}>
              Memória
            </TitleOfTheGameText>
          </TitleOfTheGame>
        </View>
        {/* Container para a animação */}
        <View
          flex={SCREEN_ATOM_PERC}
          justifyContent="center"
          alignItems="center">
          <AtomAnimationBorder diameter={atomBorderPercSize * atomMaxSize}>
            <AtomAnimation
              source={require('../../assets/atom_animation.gif')}
              diameter={atomAnimationPercSize * atomMaxSize}
            />
          </AtomAnimationBorder>
        </View>
        {/* Container para o butão play */}
        <View
          flex={SCREEN_PLAY_PERC}
          justifyContent="flex-start"
          alignItems="center">
          <PlayButtonArea diameter={playButtonSize}>
            <PlayButton
              height={playButtonSize}
              width={playButtonSize}
              fill="white"
            />
          </PlayButtonArea>
        </View>
      </Background>
    </Container>
  );
};
