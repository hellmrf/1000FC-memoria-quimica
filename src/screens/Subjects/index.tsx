import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
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
import AppContext from '../../components/AppContext';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export default () => {
  const navigation = useNavigation();
  const startButtonAction = () => navigation.navigate('ChoosePlayers');

  const userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;

  const centerScreen = (SCREEN_WIDTH * containerPlaySubjectButtonSize) / 2 - circleDiameter / 2; // Get the button's center on the screen.
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
    <ContainerMain theme={theme}>
      <ContainerTop>
        <PrimaryTitle theme={theme}> Qual tema? </PrimaryTitle>
      </ContainerTop>
      <ContainerMiddle>
        <ContainerArrowButtonLeft>
          <ArrowButton action={moveLeft} left />
        </ContainerArrowButtonLeft>
        <ContainerPlaySubjectButton>
          <PlayButton screenPosX={subjectMoveAnim} action={actions} theme={theme}>
            <PlayPeriodicTableSVG width="100%" height="100%" />
          </PlayButton>
          <PlayButton
            theme={theme}
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
        <SubTitle theme={theme}> {subjectTitle} </SubTitle>
        <NormalText theme={theme}> {subjectDescription} </NormalText>
      </ContainerBottom>
    </ContainerMain>
  );
};
