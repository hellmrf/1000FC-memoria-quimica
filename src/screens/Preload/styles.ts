import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #8c52ffff;
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
  border: 20px solid #ffffff77;
  border-radius: 150px;
`;

export const AtomAnimation = styled.Image`
  width: 100%;
  height: 100%;
`;
