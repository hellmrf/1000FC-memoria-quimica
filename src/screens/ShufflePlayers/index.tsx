import React, { useState, useRef } from 'react';
import { Animated } from 'react-native';

import NextButtonSVG from '../../assets/next_button.svg';

import {
    RowLayout,
    Container,
    ButtonArea,
    TitleContainer,
    Title
} from './styles';
import AnimatedGrid from './AnimatedGrid';


// Add a method for shuffle arrays in the 'base class'.
Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if (i == 0) return this;
    while (--i) {
       j = Math.floor(Math.random() * (i + 1));
       temp = this[i];
       this[i] = this[j];
       this[j] = temp;
    }
    return this;
  }


export default ({route, navigation}) => {

    const [avatarIds, setAvatarIds] = useState(route.params.players);
    const rouletteDegree = useRef(new Animated.Value(0)).current;
    const [finished, setFinished] = useState(false);

    let startGame = () => navigation.navigate('Game');

    return (
        <Container>
            <RowLayout flex={0.1} justifyContent='center' alignItems='flex-start' marginTop='8%'>
                <TitleContainer width='50%'>
                    <Title> Sorteando ordem dos jogadores: </Title>
                </TitleContainer>
            </RowLayout>
            <RowLayout 
                flex={0.7}
                justifyContent='center'
                alignItems='center'
                width='100%'
                >     
                <AnimatedGrid avatarIds={avatarIds} finished={finished} setFinished={setFinished} setAvatarIds={setAvatarIds}/>
            </RowLayout>
            <RowLayout flex={0.1} marginTop='8%'>
                <ButtonArea
                    onPress={startGame}
                    disabled={!finished}                    
                    >
                   <NextButtonSVG height="100%"/>
                </ButtonArea>
            </RowLayout>
        </Container>
    );
};