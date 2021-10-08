import { useNavigation } from '@react-navigation/native';
import React from 'react';

import PlayButton from '../../assets/play_button.svg';
import ConfigButton from '../../assets/config_button.svg';

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
  ConfigButtonArea
} from './styles';

export default () => {
  const navigation = useNavigation();

  const playButtonAction = () => navigation.navigate('Subjects');
  const configButtonAction = () => navigation.navigate('Config');

  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
          <ConfigButtonContainer>
            <ConfigButtonArea
              onPress={configButtonAction}
              diameter={0.7 * playButtonSize}>
              <ConfigButton
                height={0.3 * playButtonSize}
                width={0.3 * playButtonSize}
              />
            </ConfigButtonArea>
          </ConfigButtonContainer>
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
          <PlayButtonArea onPress={playButtonAction}>
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
