import styled from 'styled-components/native';
import { Dimensions, View } from 'react-native';
import { Svg } from 'react-native-svg';

import { primaryTitleSize, subTitleSize, normalTextSize } from '../../dimensions/text';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

/// Must be sum up 1.
export const relativeHeights = {top: 0.15, middle: 0.7, bottom: 0.3};

const titleHorizontalPadding = 0.25;
const normalTextHorizontalPadding = 0.2
export const circleMaxSize = Math.min(relativeHeights.middle * SCREEN_HEIGHT, SCREEN_WIDTH - (2 * SCREEN_WIDTH * 0.25));
export const circleDiameter = 1.25 * circleMaxSize;

// It's the background too.
export const ContainerMain = styled.View`
  flex: 1;
  background-color: #8c52ffff;
`;

export const ContainerTop = styled.View`
  flex: ${relativeHeights.top};
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerMiddle = styled.View`
    flex: ${relativeHeights.middle};
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const ContainerBottom = styled.View`
    flex: ${relativeHeights.bottom};
    align-items: center;
    justify-content: flex-start;
`;

export const ContainerArrowButtonLeft = styled.View`
  flex: 0.25;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerArrowButtonRight = styled(ContainerArrowButtonLeft)`
  justify-content: flex-start;
`;

export const ContainerPlaySubjectButton = styled.View`
    flex: 0.5;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

export const PlaySubjectButtonArea = styled.Pressable`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${({ pressed }) => pressed ? 'red': '#ffffff77'};
  width: ${circleDiameter}px;
  height: ${circleDiameter}px;
  border-radius: ${circleDiameter/2}px;
  padding: 20%;
  position: absolute;
  z-index: -0.5;
`;

const TextStyled = styled.Text<{horizontalPadding?: string, verticalPadding?: string}>`
  font-family: LoveloBlack;
  text-align: center;
  text-transform: uppercase;
  color: white;
  padding-horizontal: ${props => props.horizontalPadding || '0%'};
  padding-vertical: ${props => props.verticalPadding || '0%'};
`;

export const PrimaryTitle = styled(TextStyled)`
  font-size: ${primaryTitleSize}px;
`;

export const SubTitle = styled(TextStyled)`
  font-size: ${subTitleSize}px;
`;

export const NormalText = styled(TextStyled)`
  font-size: ${normalTextSize}px;
  text-transform: none;
  font-family: AileronSemiBold;
`;

