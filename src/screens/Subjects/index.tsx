import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Animated, View, Dimensions, Easing, Pressable, StyleSheet } from 'react-native';

import PlayPeriodicTableSVG from '../../assets/periodic_table_play.svg';
import PlayOrganicFuncSVG from '../../assets/organic_function_play.svg';
import ArrowSwitchLeftSVG from '../../assets/arrow_subject_left.svg';
import ArrowSwitchRightSVG from '../../assets/arrow_subject_right.svg';
import ArrowSwitchLeftPressedSVG from '../../assets/arrow_subject_left_pressed.svg';
import ArrowSwitchRightPressedSVG from '../../assets/arrow_subject_right_pressed.svg';

import { 
    ContainerMain,
    ContainerTop, 
    ContainerMiddle, 
    ContainerBottom,
    ContainerArrowButtonLeft,
    ContainerArrowButtonRight,
    ContainerPlaySubjectButton,
    PrimaryTitle,
    SubTitle,
    NormalText,
    PlaySubjectButtonArea,
    circleDiameter,
    relativeHeights,
} from './styles';
import ArrowButton from './ArrowButton';


const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default () => {
    
    const navigation = useNavigation();
    const startButtonAction = () => navigation.navigate('ChCharacter');

    const ButtonAreaAnimated = Animated.createAnimatedComponent(PlaySubjectButtonArea);

    const centerScreen = SCREEN_WIDTH * .5 / 2 - circleDiameter / 2
    const subjectMoveAnim = useRef(new Animated.Value(centerScreen)).current;
    const [isPlayPressed, setIsPlayPressed] = useState(false);

    const moveLeft = () => {
        Animated.timing(subjectMoveAnim, {
            toValue: -(SCREEN_WIDTH),
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const moveRight = () => {
        Animated.timing(subjectMoveAnim, {
            toValue: centerScreen,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    //const play

    return (
        <ContainerMain> 
            <ContainerTop>
                <PrimaryTitle horizontalPadding={'10%'}>
                    Qual tema?
                </PrimaryTitle>
            </ContainerTop>
            <ContainerMiddle style={{flexDirection: 'row', 
                justifyContent: 'space-evenly', alignItems: 'stretch'}}>
                <ContainerArrowButtonLeft>
                    <ArrowButton action={moveLeft} key='left' SVGNormal={ArrowSwitchLeftSVG} SVGPressed={ArrowSwitchLeftPressedSVG} />
                </ContainerArrowButtonLeft>
                <ContainerPlaySubjectButton>
                    <ButtonAreaAnimated left={subjectMoveAnim} onPress={startButtonAction}>
                        <PlayPeriodicTableSVG width='100%'/>
                    </ButtonAreaAnimated>
                    <ButtonAreaAnimated  left={subjectMoveAnim.interpolate({inputRange: [-SCREEN_WIDTH, centerScreen], outputRange: [centerScreen, SCREEN_WIDTH + 10]})} >
                        <PlayOrganicFuncSVG width='100%'/>
                    </ButtonAreaAnimated>
                </ContainerPlaySubjectButton>
                <ContainerArrowButtonRight>                    
                    <ArrowButton key='right' action={moveRight} SVGNormal={ArrowSwitchRightSVG} SVGPressed={ArrowSwitchRightPressedSVG} />  
                </ContainerArrowButtonRight>
            </ContainerMiddle>
            <ContainerBottom>
                <SubTitle horizontalPadding={'10%'} verticalPadding={'2%'}>
                    Tabela Periódica
                </SubTitle>
                <NormalText horizontalPadding={'5%'}>
                    Iremos nos divertir com os elementos quimícos
                </NormalText>
            </ContainerBottom>
        </ContainerMain>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderRadius: 8,
      padding: 6,
      height: 50,
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
    },
  });