import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.lightPurple};
`;

export const Background = styled(LinearGradient)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimationBorder = styled.View`
  width: 300px;
  height: 300px;
  background-color: #ffffff77;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
`;

export const AtomAnimation = styled.Image`
  width: 87%;
  height: 87%;
`;

export const LogotipoArea = styled.View`
  margin-top: 100px;
`;
