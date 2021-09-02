import React, { useState } from 'react';
import { Text, View } from 'react-native';
import theme from '../../themes';
import { range } from '../../utils/misc';

import HitsCounter from '../../components/HitsCounter';
import GameCard from '../../components/GameCard';
import {
  Avatars,
  Container,
  GameBoard,
  GameFooter,
  GameHeader,
  GameHeaderLeft,
  GameHeaderRight,
  PointsText,
  LightBulbCircle,
} from './styles';
import AvatarSelector from './AvatarSelector';

import LightBulbIcon from '../../assets/icons/light_bulb.svg';

/// Repeats `Element` for `length` times, adding a `key` prop.
function repeat_element(
  length: number,
  Element: React.FC<any>,
  properties: any = {}
): Array<React.ReactNode> {
  return range(length).map(x => <Element key={x} {...properties} />);
}

export default () => {
  const numberOfPlayers = 5; // TODO: get from props
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
        <GameHeaderLeft>
          <Avatars>{avatars}</Avatars>
          <PointsText>{points} pontos</PointsText>
        </GameHeaderLeft>
        <GameHeaderRight>
          <LightBulbCircle>
            <LightBulbIcon fill="white" width={40} height={40} />
          </LightBulbCircle>
        </GameHeaderRight>
      </GameHeader>
      {/* TODO: esse estilo aí é só temporário, não assustar com a bagunça */}
      <Text
        style={{
          color: theme.colors.lightYellow,
          fontSize: 32,
          fontFamily: theme.fonts.normal,
        }}>
        SUA VEZ!
      </Text>
      <GameBoard>
        {repeat_element(numberOfCards, GameCard, {
          onPress: nextPlayer,
        })}
      </GameBoard>
      <GameFooter>
        <HitsCounter hit counter={0} />
        <HitsCounter hit={false} counter={0} />
      </GameFooter>
    </Container>
  );
};
