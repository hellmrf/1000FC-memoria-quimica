import { Animated } from 'react-native';
import React, { useRef, useState } from 'react';

import { ButtonArea } from './styles';

const MIN_OPACITY = 0.1;

interface CharacterButtonProps {
  id: number;
  action: Function;
  children?: React.ReactNode;
}

export default (props: CharacterButtonProps) => {
  const selectionOpacity = useRef(new Animated.Value(MIN_OPACITY)).current;
  const ButtonAreaAnimated = Animated.createAnimatedComponent(ButtonArea);
  const [active, setActive] = useState(false);

  const activeAnimate = () => {
    Animated.timing(selectionOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const deactiveAnimate = () => {
    Animated.timing(selectionOpacity, {
      toValue: MIN_OPACITY,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const actions = () => {
    props.action();

    if (!active) {
      activeAnimate();
    } else {
      deactiveAnimate();
    }
    setActive(!active);
  };

  return (
    <ButtonAreaAnimated onPress={actions} style={{ opacity: selectionOpacity }}>
      {props.children}
    </ButtonAreaAnimated>
  );
};
