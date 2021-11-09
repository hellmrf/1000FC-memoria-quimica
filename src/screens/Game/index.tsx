import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../themes';
import { range } from '../../utils/misc';

import HitsCounter from '../../components/HitsCounter';
import GameCard from '../../components/GameCard';
import { Avatars, StyledContainer, GameBoard, GameArea, GameFooter, GameHeader } from './styles';
import AvatarSelector from './AvatarSelector';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../stacks/MainStack';
import Animated from 'react-native-reanimated';
import { STATUSBAR_HEIGHT } from '../../utils/deviceConstants';
// import Animated from 'react-native-reanimated';

interface ContainerProps {
  player: number;
  colors: string[];
  children?: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  type BackgroundType = {
    backgroundColor: Animated.AnimatedInterpolation | string;
  };
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [animationStyle, setAnimationStyle] = useState<BackgroundType>({
    backgroundColor: theme.colors.mainBackground,
  });
  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const getColors = (player: number) => {
    const lastPlayer = player - 1;
    let lastColor = props.colors[lastPlayer];
    if (lastPlayer < 0) {
      lastColor = props.colors[props.colors.length - 1];
    }
    return [lastColor, props.colors[player]];
  };

  const containerInterpolation = () =>
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: getColors(props.player),
    });

  useEffect(() => {
    setAnimationStyle({ backgroundColor: containerInterpolation() });
    handleAnimation();
  }, [animationStyle]);

  const defaultStyle = StyleSheet.create({
    main: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: STATUSBAR_HEIGHT,
      flex: 1,
      backgroundColor: 'pink',
    },
  });

  // handleAnimation();

  return (
    <Animated.View style={[defaultStyle.main, animationStyle]}>{props.children}</Animated.View>
    // <StyledContainer>
    // <Animated.View style={[defaultStyle.main, animationStyle]}>{props.children}</Animated.View>
    // </StyledContainer>
  );
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
