import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
  background-color: #a4d418ff;
  justify-content: center;
  align-items: center;
`;

export const GameBoard = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
