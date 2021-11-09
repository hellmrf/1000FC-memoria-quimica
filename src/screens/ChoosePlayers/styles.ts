import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';

export const minOpactiy = 0.1;

import { Container, RowLayout, CharacterButton, Title } from '../ShufflePlayers/styles';
import { Theme } from '../../themes';
export { RowLayout, Container, CharacterButton, Title };

export const ButtonArea = styled.Pressable`
  flex: 1;
  padding: 2%;
  align-items: center;
  justify-content: center;
  z-index: 0.5;
  opacity: ${props => (props.disabled ? minOpactiy : 1)};
`;

export const TitleContainer = styled.View<{ theme: Theme }>`
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
