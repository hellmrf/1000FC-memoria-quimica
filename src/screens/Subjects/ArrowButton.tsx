import React, { useRef} from 'react';
import { Pressable, Animated, Easing, View } from 'react-native';

export default (props: object) => {

    const opacityFade = useRef(new Animated.Value(1)).current;

    const animateClick = () => {
        opacityFade.setValue(0);
        Animated.timing(opacityFade, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(() => {opacityFade.setValue(1)});
    };

    return (
        <View style={{height: '100%', width: '100%', zIndex: 0.5}}>
            <Animated.View 
                style={{
                    zIndex: 1,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    opacity: opacityFade
                }}>
                <props.SVGNormal 
                    width='100%' 
                    position='absolute'
                    left={0}
                    top={0}
                    /> 
            </Animated.View>
            <Animated.View 
                style={{
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    opacity: opacityFade.interpolate({inputRange:[0, 1], outputRange: [1, 0]})
                }}>
                <props.SVGPressed
                    width='100%' 
                    position='absolute'
                    left={0}
                    top={0}
                    /> 
            </Animated.View>
        <Pressable onPress={() => {animateClick(); props.action();}} style={{width:'100%', height:'100%'}} />
        </View>
    );
}