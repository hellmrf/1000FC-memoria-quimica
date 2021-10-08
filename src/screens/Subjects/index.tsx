import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

import PlayPeriodicTableSVG from '../../assets/periodic_table_play.svg';
import PlayOrganicFuncSVG from '../../assets/organic_function_play.svg';

import {
  ContainerMain,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  ContainerArrowButtonLeft,
  ContainerArrowButtonRight,
  ContainerPlaySubjectButton,
  containerPlaySubjectButtonSize,
  PrimaryTitle,
  SubTitle,
  NormalText,
  circleDiameter,
} from './styles';

import ArrowButton from './ArrowButton';
import PlayButton from './PlayButton';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default () => {
  const navigation = useNavigation();
  const startButtonAction = () => navigation.navigate('ChCharacter');

  const centerScreen =
    (SCREEN_WIDTH * containerPlaySubjectButtonSize) / 2 - circleDiameter / 2; // Get the button's center on the screen.
  const subjectMoveAnim = useRef(new Animated.Value(centerScreen)).current;
  const [subjectTitle, setSubjectTtile] = useState('Tabela Periódica');
  const [subjectDescription, setSubjectDescription] = useState(
    'Iremos nos divertir com os elementos quimícos'
  );

  const moveLeft = () => {
    Animated.timing(subjectMoveAnim, {
      toValue: -SCREEN_WIDTH,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setSubjectTtile('Funções Orgânicas');
      setSubjectDescription('Iremos entrar no mundo da química orgânica');
    });
  };

  const moveRight = () => {
    Animated.timing(subjectMoveAnim, {
      toValue: centerScreen,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setSubjectTtile('Tabela Periódica');
      setSubjectDescription('Iremos nos divertir com os elementos quimícos');
    });
  };

  const actions = () => {
    startButtonAction();
  };

  return (
    <ContainerMain>
      <ContainerTop>
        <PrimaryTitle> Qual tema? </PrimaryTitle>
      </ContainerTop>
      <ContainerMiddle>
        <ContainerArrowButtonLeft>
          <ArrowButton action={moveLeft} left />
        </ContainerArrowButtonLeft>
        <ContainerPlaySubjectButton>
          <PlayButton screenPosX={subjectMoveAnim} action={actions}>
            <PlayPeriodicTableSVG width="100%" height="100%" />
          </PlayButton>
          <PlayButton
            action={() => {}}
            screenPosX={subjectMoveAnim.interpolate({
              inputRange: [-SCREEN_WIDTH, centerScreen],
              outputRange: [centerScreen, SCREEN_WIDTH],
            })}>
            <PlayOrganicFuncSVG width="100%" height="100%" />
          </PlayButton>
        </ContainerPlaySubjectButton>
        <ContainerArrowButtonRight>
          <ArrowButton action={moveRight} right />
        </ContainerArrowButtonRight>
      </ContainerMiddle>
      <ContainerBottom>
        <SubTitle> {subjectTitle} </SubTitle>
        <NormalText> {subjectDescription} </NormalText>
      </ContainerBottom>
    </ContainerMain>
  );
};
