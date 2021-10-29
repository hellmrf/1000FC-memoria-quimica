import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { appPrimaryTitleSize } from '../../dimensions/text';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

/// Must be sum up 1.
const relativeHeights = {
  config: 0.1,
  title: 0.1,
  atom: 0.5,
  play: 0.3,
} as const;

const atomBorderPercSize = 0.7;
const atomMaxSize = Math.min(
  relativeHeights.atom * SCREEN_HEIGHT,
  SCREEN_WIDTH
);
const atomDiameter = atomBorderPercSize * atomMaxSize;

const playButtonPercSize = 0.5;

export const playButtonSize =
  playButtonPercSize * relativeHeights.play * SCREEN_HEIGHT;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.components.homeBackgroundColor};
`;

export const Background = styled(LinearGradient)`
  flex: 1;
`;

export const AnimationContainer = styled.View`
  flex: ${relativeHeights.atom};
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimationBorder = styled.View`
  width: ${atomDiameter}px;
  height: ${atomDiameter}px;
  background-color: ${({ theme }) => theme.components.homeAtomBorderColor};
  border-radius: ${atomDiameter / 2}px;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimation = styled.Image`
  width: ${atomDiameter * 0.9}px;
  height: ${atomDiameter * 0.9}px;
`;

export const PlayButtonContainer = styled.View`
  flex: ${relativeHeights.play};
  z-index: 2;
  justify-content: flex-start;
  align-items: center;
`;

export const PlayButtonArea = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.components.homePlayButtonAreaColor};
  border-radius: ${playButtonSize / 2}px;
`;

export const TitleOfTheGameContainer = styled.View`
  flex: ${relativeHeights.title};
  z-index: 9;
  justify-content: center;
  margin-top: -10%;
`;

export const TitleOfTheGame = styled.View`
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${-1.25 * relativeHeights.title * SCREEN_HEIGHT}px;
`;

export const TitleOfTheGameText = styled.Text<{ bold?: boolean }>`
  font-family: ${props => (props.bold ? props.theme.fonts.normal : props.theme.fonts.bold)};
  font-size: ${appPrimaryTitleSize}px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
`;

export const ConfigButtonContainer = styled.View`
  flex: ${relativeHeights.config};
  align-items: flex-end;
  margin-top:10%;
  padding-right:4%;
`;

export const ConfigButtonArea = styled.TouchableOpacity<{diameter: number}>`
  background-color: ${({ theme }) => theme.components.homeConfigButtonAreaColor};
  border-radius: ${props => (props.diameter / 2)}px;
  width: ${props => (props.diameter / 2)}px;
  height: ${props => (props.diameter / 2)}px;
  align-items: center;
  justify-content: center;
`;