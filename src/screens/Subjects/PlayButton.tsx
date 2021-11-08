import React, { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { PlaySubjectButtonArea } from './styles';

export default (props: object) => {
  const opacityPress = useRef(new Animated.Value(1)).current;
  const PlaySubjectButtonAreaAnimated = Animated.createAnimatedComponent(
    PlaySubjectButtonArea
  );

  const clickAnimate = () => {
    Animated.timing(opacityPress, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      opacityPress.setValue(1);
      props.action();
    });
  };

  const actions = () => {
    clickAnimate();
  };

  return (
    <PlaySubjectButtonAreaAnimated
      onPress={actions}
      opacity={opacityPress}
      left={props.screenPosX}
      theme={props.theme}>
      {props.children}
    </PlaySubjectButtonAreaAnimated>
  );
};
