import styled from 'styled-components/native';
import { Dimensions, View } from 'react-native';
import { Svg } from 'react-native-svg';
import { primaryTitleSize, subTitleSize, normalTextSize } from '../../dimensions/text';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const relativeHeights = {top: 0.15, middle: 0.7, bottom: 0.3}; // Must be sum up 1.
export const circleMaxSize = Math.min(relativeHeights.middle * SCREEN_HEIGHT, SCREEN_WIDTH - (2 * SCREEN_WIDTH * 0.25));
export const circleDiameter = 1.25 * circleMaxSize;

export const containerPlaySubjectButtonSize = 0.5;
export const containerArrowButtonSize = 0.25;

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
    align-items: stretch;
    justify-content: space-evenly
`;

export const ContainerBottom = styled.View`
    flex: ${relativeHeights.bottom};
    align-items: center;
    justify-content: flex-start;
`;

export const ContainerArrowButtonLeft = styled.View`
  flex: ${containerArrowButtonSize};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerArrowButtonRight = styled(ContainerArrowButtonLeft)`
  justify-content: flex-start;
`;

export const ContainerPlaySubjectButton = styled.View`
    flex: ${containerPlaySubjectButtonSize};
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
  background-color: #ffffff77;
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
  font-size: ${primaryTitleSize}px
  padding-horizontal: 10%;;
`;

export const SubTitle = styled(TextStyled)`
  font-size: ${subTitleSize}px
  padding: 2% 10%;;
`;

export const NormalText = styled(TextStyled)`
  font-size: ${normalTextSize}px;
  text-transform: none;
  font-family: AileronSemiBold
  padding-horizontal: 5%;
`;


