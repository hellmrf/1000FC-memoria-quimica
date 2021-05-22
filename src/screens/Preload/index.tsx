import React from 'react';
import { Image } from 'react-native';

import { AtomAnimation, Background, Container } from './styles';

export default () => {
  return (
    <Container>
      <Background
        start={{ x: 1, y: 1 }}
        end={{ x: 0.0, y: 0 }}
        colors={['#13f3cbff', '#13f3cb60', '#13f3cb00']}>
        <AtomAnimation
          style={{ resizeMode: 'stretch' }}
          source={require('../../assets/atom_animation.gif')}
        />
      </Background>
    </Container>
  );
};
