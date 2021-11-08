import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { Easing } from "react-native-reanimated";

import Character1Icon from '../../assets/avatars/character_1.svg';
import Character2Icon from '../../assets/avatars/character_2.svg';
import Character3Icon from '../../assets/avatars/character_3.svg';
import Character4Icon from '../../assets/avatars/character_4.svg';
import Character5Icon from '../../assets/avatars/character_5.svg';
import Character6Icon from '../../assets/avatars/character_6.svg';

const avatars = {
    1: Character1Icon,
    2: Character2Icon,
    3: Character3Icon,
    4: Character4Icon,
    5: Character5Icon,
    6: Character6Icon
};

 
const timeShuffle = 3; // seconds.

export default (props) => {

    const numColumns = Math.max(4, props.avatarIds.length);
    const [xCoords, setXCoords] = useState(Array());
    const opacityFade = useRef(new Animated.Value(1)).current;
    const countAnimRepeats = useRef(0);

    useEffect(() => {   
       
        const interval = setInterval(() => {

            if (countAnimRepeats.current < timeShuffle){
                const animation = Animated.sequence([
                    Animated.timing(opacityFade, {
                        toValue: 0,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.linear,
                    }),
                    Animated.timing(opacityFade, {
                        toValue: 1,
                        useNativeDriver: false,
                        duration: 500,
                        easing: Easing.linear,
                    })
                ]);
                animation.start(() => { // Callback called after the animation.
                    countAnimRepeats.current += 1;
                });

                const neww = Array.from(props.avatarIds);
                neww.shuffle();
                props.setAvatarIds(neww);

            }else{
                if (!props.finished){
                    props.setFinished(true);
                }
            }
            
        }, 1000);  // Repeat each second.
        
        return () => clearInterval(interval);
    });

    const renderItem = (item) => {

        const AvatarSVG = avatars[item];

        const addCoord = (x: number): void => {
            const xCoordsAux = Array.from(xCoords);
            xCoordsAux.push(x);
            setXCoords(xCoordsAux);
        }        

        return (
            <Animated.View key={item} style={{flex: 1 / numColumns, alignItems: 'center', alignContent: 'center', 
            justifyContent: 'center', paddingHorizontal: '2%', flexDirection: 'column'}} onLayout={({ nativeEvent }) => { addCoord(nativeEvent.layout.x) }}
            >
                <Animated.View style={{width: '100%', height: '50%', opacity: opacityFade}}>
                    <AvatarSVG width='100%' height='100%' />
                </Animated.View>
                <Text style={{fontWeight: 'bold', backgroundColor: props.theme.components.sufflePlayersColors[item - 1], borderRadius: 100, height: 30, width: 30, textAlign: 'center', textAlignVertical: 'center'}}>
                    #{props.avatarIds.indexOf(item) + 1}
                </Text>
            </Animated.View>
        );
    }


    const endActions = () => {
        // To able the next button
        props.setFinished(true);
    }

    return (
        <View flex={1} style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
            {props.avatarIds.map((item) => renderItem(item))}
        </View>
    );

}