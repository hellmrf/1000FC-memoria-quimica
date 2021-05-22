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

export const AtomAnimation = styled.Image`
  width: 200px;
  height: 200px;
`;
