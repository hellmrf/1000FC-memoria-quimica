import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { appPrimaryTitleSize } from '../../dimensions/text';
import theme from '../../themes';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

/// Must be sum up 1.
const relativeHeights = {
  title: 0.2,
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
  background-color: ${theme.colors.lightPurple};
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
  background-color: #ffffff77;
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
  background-color: #ffffff33;
  border-radius: ${playButtonSize / 2}px;
`;

export const TitleOfTheGameContainer = styled.View`
  flex: ${relativeHeights.title};
  z-index: 9;
  justify-content: center;
`;

export const TitleOfTheGame = styled.View`
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${-1.25 * relativeHeights.title * SCREEN_HEIGHT}px;
`;

export const TitleOfTheGameText = styled.Text<{
  bold?: boolean;
}>`
  font-family: ${props => (props.bold ? theme.fonts.normal : theme.fonts.bold)};
  font-size: ${appPrimaryTitleSize}px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
`;
