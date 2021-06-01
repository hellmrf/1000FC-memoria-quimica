import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: #8c52ffff;
`;

export const Background = styled(LinearGradient)`
  flex: 1;
`;

export const AtomAnimationBorder = styled.View<{ diameter: number }>`
  width: ${props => props.diameter}px;
  height: ${props => props.diameter}px;
  background-color: #ffffff77;
  border-radius: ${props => props.diameter / 2}px;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimation = styled.Image<{ diameter?: number }>`
  width: ${props => props.diameter + 'px' || '87%'};
  height: ${props => props.diameter + 'px' || '87%'};
  resize-mode: contain;
`;

export const PlayButtonArea = styled.TouchableOpacity<{ diameter: number }>`
  background-color: #ffffff33;
  border-radius: ${props => props.diameter / 2 + 'px'};
`;

export const TitleOfTheGame = styled.View<{ marginBottom?: number }>`
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const TitleOfTheGameText = styled.Text<{
  bold?: boolean;
  fontSize: number;
}>`
  font-family: ${props => (props.bold ? 'LoveloBlack' : 'LoveloLineBold')};
  font-size: ${props => props.fontSize}px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
`;
