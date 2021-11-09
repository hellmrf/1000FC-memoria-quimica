import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import theme from '../../themes';
import { range } from '../../utils/misc';

import HitsCounter from '../../components/HitsCounter';
import GameCard from '../../components/GameCard';
import { Avatars, StyledContainer, GameBoard, GameArea, GameFooter, GameHeader } from './styles';
import AvatarSelector from './AvatarSelector';
import { STATUSBAR_HEIGHT } from '../../utils/deviceConstants';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Animated from 'react-native-reanimated';

interface ContainerProps {
  player: number;
  colors: string[];
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const getPlayerColor = (player: number) => {
    if (player < 0) return props.colors[0];
    return props.colors[player % props.colors.length];
  };

  return <StyledContainer color={getPlayerColor(props.player)}>{props.children}</StyledContainer>;
};

export default () => {
  const numberOfPlayers = 4; // TODO: get from props
  const numberOfCards = 4 * 4;

  const [activePlayer, setActivePlayer] = React.useState(0);
  const [points, setPoints] = React.useState(1000);
  const nextPlayer = () => setActivePlayer((activePlayer + 1) % numberOfPlayers);

  const avatars = range(numberOfPlayers).map(x => (
    <AvatarSelector key={x} active={activePlayer === x} />
  ));

  return (
    <Container player={activePlayer} colors={theme.colors.avatars}>
      <GameHeader>
        <Avatars>{avatars}</Avatars>
      </GameHeader>
      <GameArea>
        <GameBoard>
          {range(numberOfCards).map(x => (
            <GameCard key={x} onPress={nextPlayer} />
          ))}
        </GameBoard>
      </GameArea>
      <GameFooter>
        <HitsCounter hit counter={0} />
        <HitsCounter hit={false} counter={0} />
      </GameFooter>
    </Container>
  );
};
