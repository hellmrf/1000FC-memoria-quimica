import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Logotipo from '../assets/logotipo.svg';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const CARD_SIZE = SCREEN_WIDTH * 0.2;

const Card = styled.TouchableOpacity`
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;
  border-radius: 10px;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export default () => {
  return (
    <Card activeOpacity={0.5}>
      <Logotipo width={CARD_SIZE * 0.75} fill="black" />
    </Card>
  );
};
