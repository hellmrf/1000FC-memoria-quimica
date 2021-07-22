import styled from 'styled-components/native';
import theme from '../../themes';
import { STATUSBAR_HEIGHT } from '../../utils/deviceConstants';
// import { Dimensions } from 'react-native';

// const SCREEN_WIDTH = Dimensions.get('screen').width;
// const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.mainBackground};
  justify-content: center;
  align-items: center;
  padding-top: ${STATUSBAR_HEIGHT}px;
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
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const PointsText = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.normal};
  color: ${theme.colors.lightGray};
`;

export const GameHeader = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const GameHeaderLeft = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 70%;
`;

export const GameHeaderRight = styled.View`
  width: 20%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Avatars = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
