import React, { useState, useRef, useContext } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Animated } from 'react-native';

import NextButtonSVG from '../../assets/next_button.svg';

import { RowLayout, Container, ButtonArea, TitleContainer, Title } from './styles';
import AnimatedGrid from './AnimatedGrid';
import AppContext from '../../components/AppContext';

import { StackParamList } from '../../stacks/MainStack';
import { StackScreenProps } from '@react-navigation/stack';

// Add a method for shuffle arrays in the prototype.
declare global {
  interface Array<T> {
    shuffle(): T[];
  }
}
Array.prototype.shuffle = function () {
  let i = this.length;
  if (i == 0) return this;
  while (--i) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

type Props = StackScreenProps<StackParamList, 'ShufflePlayers'>;
export default ({ route, navigation }: Props) => {
  const [avatarIds, setAvatarIds] = useState(route.params.players);
  const [finished, setFinished] = useState(false);

  const userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;

  const startGame = () => navigation.navigate('Game', { players: avatarIds });

  return (
    <Container theme={theme}>
      <RowLayout flex={0.1} justifyContent="center" alignItems="flex-start" marginTop="8%">
        <TitleContainer theme={theme} width="50%">
          <Title theme={theme}> Sorteando ordem dos jogadores: </Title>
        </TitleContainer>
      </RowLayout>
      <RowLayout flex={0.7} justifyContent="center" alignItems="center" width="100%">
        <AnimatedGrid
          theme={theme}
          avatarIds={avatarIds}
          finished={finished}
          setFinished={setFinished}
          setAvatarIds={setAvatarIds}
        />
      </RowLayout>
      <RowLayout flex={0.1} marginTop="8%">
        <ButtonArea onPress={startGame} disabled={!finished}>
          <NextButtonSVG height="100%" />
        </ButtonArea>
      </RowLayout>
    </Container>
  );
};
