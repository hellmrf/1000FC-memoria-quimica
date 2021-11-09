import React, { useRef } from 'react';
import { Pressable, Animated, Easing, StyleSheet } from 'react-native';

import ArrowSwitchLeftSVG from '../../assets/arrow_subject_left.svg';
import ArrowSwitchRightSVG from '../../assets/arrow_subject_right.svg';
import ArrowSwitchLeftPressedSVG from '../../assets/arrow_subject_left_pressed.svg';
import ArrowSwitchRightPressedSVG from '../../assets/arrow_subject_right_pressed.svg';

interface ArrowButtonProps {
  action: () => void;
}
export default (props: ArrowButtonProps) => {
  const opacityFade = useRef(new Animated.Value(1)).current;

  const animateClick = () => {
    opacityFade.setValue(0);
    Animated.timing(opacityFade, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      opacityFade.setValue(1);
    });
  };

  let ArrowNormal = ArrowSwitchLeftSVG;
  let ArrowPressed = ArrowSwitchLeftPressedSVG;

  // Check if it is the right button.
  if (props.hasOwnProperty('right')) {
    ArrowNormal = ArrowSwitchRightSVG;
    ArrowPressed = ArrowSwitchRightPressedSVG;
  }

  const actions = () => {
    animateClick();
    props.action();
  };

  return (
    <Pressable style={style.base} onPress={actions}>
      <Animated.View style={style.normal} opacity={opacityFade}>
        <ArrowNormal width="100%" height="100%" />
      </Animated.View>
      <Animated.View
        style={style.pressed}
        opacity={opacityFade.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        })}>
        <ArrowPressed width="100%" height="100%" />
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  base: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0.5,
  },
  normal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  pressed: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
