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
  TitleOfTheGameContainer,
  AnimationContainer,
  PlayButtonContainer,
  playButtonSize,
} from './styles';

export default () => {
  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
        <TitleOfTheGameContainer>
          <TitleOfTheGame>
            <TitleOfTheGameText>Jogo</TitleOfTheGameText>
            <TitleOfTheGameText>da</TitleOfTheGameText>
            <TitleOfTheGameText bold>Memória</TitleOfTheGameText>
          </TitleOfTheGame>
        </TitleOfTheGameContainer>
        <AnimationContainer>
          <AtomAnimationBorder>
            <AtomAnimation
              source={require('../../assets/atom_animation.gif')}
            />
          </AtomAnimationBorder>
        </AnimationContainer>
        <PlayButtonContainer>
          <PlayButtonArea>
            <PlayButton
              height={playButtonSize}
              width={playButtonSize}
              fill="white"
            />
          </PlayButtonArea>
        </PlayButtonContainer>
      </Background>
    </Container>
  );
};
