import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Svg } from 'react-native-svg';

import {
  normalTextSize,
  subTitleSize,
  subSubTitleSize,
  primaryTitleSize
} from '../../dimensions/text';


const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const BgCircWidthDiameter = 0.9 * Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);


export const Container = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    background-color: #5e17ebff;
    padding-horizontal: 4%;
    
`;

export const RowLayout = styled.View`
    flex: ${(props) => (props.flex) || 1};
    flex-direction: row;
    justify-content: ${(props) => (props.justifyContent || 'space-between')};
    align-items: ${(props) => (props.alignItems || 'center')};
`;

export const BgCircle = styled.View<{perc: number, bgColor ?: string}>`
    border-radius: ${(props) => (props.perc ? props.perc:1) * BgCircWidthDiameter / 2}px;
    width: ${(props) => (props.perc ? props.perc:1) * BgCircWidthDiameter}px;
    height: ${(props) => (props.perc ? props.perc:1) * BgCircWidthDiameter}px;
    background-color: ${props => props.bgColor ? props.bgColor:'#e3bc73ff'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const ButtonArea = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.3 : 1}
  padding: 2%;
`;

export const TitleContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    background-color: #e3bc73ff;
    padding-vertical: 3%;
    margin-horizontal: 10%;
`;

export const ContainerSVG = styled(Svg)`
    width: 100%;
    height: 100%;
    z-index: 10;
`;

export const CharacterButton = styled.TouchableOpacity<{idx: number, characters: Array<boolean>, width: number, height: number}>`
    align-items: center;
    justify-content: center;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

export const Title = styled.Text`
    font-family: LoveloBlack;
    text-align: center;
    color: white;
    padding-horizontal: ${props => props.horizontalPadding || '0%'};
    padding-vertical: ${props => props.verticalPadding || '0%'};
    font-size: ${subSubTitleSize}px;
`;
