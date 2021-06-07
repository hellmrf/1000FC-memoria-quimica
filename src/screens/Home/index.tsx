import React from 'react';

import PlayButton from '../../assets/play_button.svg';

import {
  AtomAnimation,
  AtomAnimationBorder,
  Background,
  Container,
  PlayButtonArea,
  TitleOfTheGame,
  TitleOfTheGameText,
} from './styles';

export default () => {
  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
        <TitleOfTheGame>
          <TitleOfTheGameText>Jogo</TitleOfTheGameText>
          <TitleOfTheGameText>da</TitleOfTheGameText>
          <TitleOfTheGameText bold>Memória</TitleOfTheGameText>
        </TitleOfTheGame>
        <AtomAnimationBorder>
          <AtomAnimation
            style={{ resizeMode: 'stretch' }}
            source={require('../../assets/atom_animation.gif')}
          />
        </AtomAnimationBorder>
        <PlayButtonArea>
          <PlayButton height={120} width={120} fill="white" />
        </PlayButtonArea>
      </Background>
    </Container>
  );
};
