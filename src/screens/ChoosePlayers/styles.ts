import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';

import {
  normalTextSize,
  subTitleSize,
  subSubTitleSize,
  primaryTitleSize
} from '../../dimensions/text';

export const minOpactiy = 0.1;

export const Container = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    background-color: ${({ theme }) => theme.components.choosePlayersBackgroundColor};
    padding-horizontal: 4%;
    z-index: -1;
    
`;

export const RowLayout = styled.View`
    flex: ${(props) => (props.flex) || 1};
    flex-direction: row;
    justify-content: ${(props) => (props.justifyContent || 'space-between')};
    align-items: ${(props) => (props.alignItems || 'center')};
`;


export const ButtonArea = styled.Pressable`
  flex: 1;
  padding: 2%;
  align-items: center;
  justify-content: center;
  z-index: 0.5;
  opacity: ${(props) => props.disabled ? minOpactiy: 1}
`;

export const TitleContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    background-color: ${({ theme }) => theme.components.choosePlayersTitleBackgroundColor};
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
    font-family: ${({ theme }) => theme.fonts.normal};
    text-align: center;
    color: white;
    padding-horizontal: ${props => props.horizontalPadding || '0%'};
    padding-vertical: ${props => props.verticalPadding || '0%'};
    font-size: ${subSubTitleSize}px;
`;
