import React, { useState } from 'react';
import theme from '../../themes';
import { range } from '../../utils/misc';

import HitsCounter from '../../components/HitsCounter';
import GameCard from '../../components/GameCard';
import { Avatars, Container, GameBoard, GameArea, GameFooter, GameHeader } from './styles';
import AvatarSelector from './AvatarSelector';

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
    <Container>
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
