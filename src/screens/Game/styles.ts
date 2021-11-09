import styled from 'styled-components/native';
import theme from '../../themes';
import { STATUSBAR_HEIGHT } from '../../utils/deviceConstants';
import { getScreenSizePX } from '../../utils/responsive';

export const StyledContainer = styled.SafeAreaView<{ color?: string }>`
  flex: 1;
  background-color: ${props => props.color || theme.colors.mainBackground};
  justify-content: center;
  align-items: center;
  padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const GameArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GameBoard = styled.View`
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
export const Avatars = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
