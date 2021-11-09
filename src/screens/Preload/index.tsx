import React from 'react';

import Logotipo from '../../assets/logotipo_mono.svg';

import { AtomAnimation, AtomAnimationBorder, Background, Container, LogotipoArea } from './styles';

export default () => {
  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
        <AtomAnimationBorder>
          <AtomAnimation
            style={{ resizeMode: 'stretch' }}
            source={require('../../assets/atom_animation.gif')}
          />
        </AtomAnimationBorder>
        <LogotipoArea>
          <Logotipo width={200} fill="white" />
        </LogotipoArea>
      </Background>
    </Container>
  );
};
