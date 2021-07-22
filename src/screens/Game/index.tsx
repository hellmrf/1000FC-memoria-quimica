import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../themes';

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
} from './styles';
import AvatarSelector from './AvatarSelector';

/// Repeats `Element` for `length` times, adding a `key` prop.
function repeat_element(
  length: number,
  Element: React.FC
): Array<React.ReactNode> {
  return [...Array(length).keys()].map(x => <Element key={x} />);
}

export default () => {
  const cards = repeat_element(4 * 4, GameCard);

  return (
    <Container>
      <GameHeader>
        <GameHeaderLeft>
          <Avatars>
            <AvatarSelector />
            <AvatarSelector />
            <AvatarSelector />
            <AvatarSelector />
            <AvatarSelector active />
          </Avatars>
          <PointsText>1000 pontos</PointsText>
        </GameHeaderLeft>
        <GameHeaderRight>
          <Text style={{ color: 'white' }}>LÂMPADA</Text>
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
      <GameBoard>{cards}</GameBoard>
      <GameFooter>
        <HitsCounter hit counter={0} />
        <HitsCounter hit={false} counter={0} />
      </GameFooter>
    </Container>
  );
};
