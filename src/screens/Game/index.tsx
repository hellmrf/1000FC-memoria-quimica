import React from 'react';
import theme from '../../themes';
import { range } from '../../utils/misc';

import HitsCounter from '../../components/HitsCounter';
import GameCard from '../../components/GameCard';
import { Avatars, StyledContainer, GameBoard, GameArea, GameFooter, GameHeader } from './styles';
import AvatarSelector from './AvatarSelector';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../stacks/MainStack';
// import Animated from 'react-native-reanimated';

import { avatars } from '../../components/CharachterIcons';

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

interface GameProps {
  cardsNumber?: number;
}
type Props = StackScreenProps<StackParamList, 'Game'> & GameProps;

export default (props: Props) => {
  const players = props.route.params.players;
  const playersNumber = players.length;

  const numberOfPlayers = playersNumber;
  const numberOfCards = props.cardsNumber || 4 * 4;

  const [activePlayer, setActivePlayer] = React.useState(0);
  const [points, setPoints] = React.useState(1000);
  const nextPlayer = () => setActivePlayer((activePlayer + 1) % numberOfPlayers);

  const avatarsElems = players.map(x => {
    // FIXME: The problem here is that we're indexing from the avatars IDs, but actually we need the index in the sense of an offset.
    console.info(x);
    return <AvatarSelector key={x} active={activePlayer === x} Avatar={avatars[x]} />;
  });

  return (
    <Container player={activePlayer} colors={theme.colors.avatars}>
      <GameHeader>
        <Avatars>{avatarsElems}</Avatars>
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
