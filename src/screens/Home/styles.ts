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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const AtomAnimationBorder = styled.View`
  width: 75%;
  height: ${windowWidth * 0.75}px;
  background-color: #ffffff77;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimation = styled.Image`
  width: 87%;
  height: 87%;
`;

export const PlayButtonArea = styled.TouchableOpacity`
  background-color: #ffffff33;
  border-radius: 60px;
`;

export const TitleOfTheGame = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: -140px;
  z-index: 5;
`;

export const TitleOfTheGameText = styled.Text<{ bold?: boolean }>`
  font-family: ${props => (props.bold ? 'LoveloBlack' : 'LoveloLineBold')};
  font-size: 54px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
`;
