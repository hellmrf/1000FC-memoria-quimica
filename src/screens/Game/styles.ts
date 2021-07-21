import styled from 'styled-components/native';
import theme from "../../themes"
// import { Dimensions } from 'react-native';

// const SCREEN_WIDTH = Dimensions.get('screen').width;
// const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.mainBackground};
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

export const GameFooter = styled.View`
  background-color: ${theme.colors.purple};
  border-top-color: ${theme.colors.lightPurple};
  border-top-width: 3px;
  width:100%;
  height:50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;