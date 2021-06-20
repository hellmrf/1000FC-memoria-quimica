import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import GameCard from '../../components/GameCard';

import { Container, GameBoard } from './styles';

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
      <GameBoard>{cards}</GameBoard>
    </Container>
  );
};
