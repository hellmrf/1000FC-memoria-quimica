import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';

import Character1Icon from '../../assets/avatars/character_1.svg';
import Character2Icon from '../../assets/avatars/character_2.svg';
import Character3Icon from '../../assets/avatars/character_3.svg';
import Character4Icon from '../../assets/avatars/character_4.svg';
import Character5Icon from '../../assets/avatars/character_5.svg';
import Character6Icon from '../../assets/avatars/character_6.svg';
import IllusTitle01 from '../../assets/illustration_04.svg';
import IllusTitle02 from '../../assets/illustration_05.svg';
import IllusContent01 from '../../assets/illustration_03.svg';
import IllusContent02 from '../../assets/illustration_02.svg';
import IllusContent03 from '../../assets/illustration_01.svg';
import NextButtonSVG from '../../assets/next_button.svg';

import { RowLayout, ContainerSVG, Container, ButtonArea, TitleContainer, Title } from './styles';

import CharacterButton from './CharacterButton';
import AppContext from '../../components/AppContext';

const ILLUS_WIDTH = '30%';
const ILLUS_HEIGHT = '70%';

const maxPlayers = 6;
const minPlayers = 2; // Min players in the game.

export default () => {
  const navigation = useNavigation();

  const userPrefs = useContext(AppContext);
  const theme = userPrefs.theme;

  const [next, setNext] = useState(false);
  const [players, setPlayers] = useState(Array<number>());
  const nextButtonAction = () => navigation.navigate('ShufflePlayers', { players });

  const selectAvatar = (id: number) => {
    const cplayers = Array.from(players);
    const index = cplayers.indexOf(id);
    if (index >= 0) {
      cplayers.splice(index, 1);
    } else {
      cplayers.push(id);
    }
    setNext(cplayers.length >= minPlayers && cplayers.length <= maxPlayers);
    setPlayers(cplayers);
  };

  return (
    <Container theme={theme}>
      <RowLayout flex={0.2} justifyContent="center" alignItems="flex-start" marginTop="8%">
        <TitleContainer theme={theme}>
          <ContainerSVG height="40%" width="20%">
            <IllusTitle01 height="100%" width="100%" />
          </ContainerSVG>
          <Title theme={theme}>escolha um {'\n'}personagem:</Title>
          <ContainerSVG height="40%" width="20%">
            <IllusTitle02 height="100%" width="100%" />
          </ContainerSVG>
        </TitleContainer>
      </RowLayout>
      <RowLayout flex={0.17}>
        <CharacterButton id={1} action={() => selectAvatar(1)}>
          <Character1Icon height="100%" width="100%" />
        </CharacterButton>
        <IllusContent01 width={ILLUS_WIDTH} height={ILLUS_HEIGHT} />
        <CharacterButton id={2} action={() => selectAvatar(2)}>
          <Character2Icon height="100%" width="100%" />
        </CharacterButton>
      </RowLayout>
      <RowLayout flex={0.17}>
        <CharacterButton id={3} action={() => selectAvatar(3)}>
          <Character3Icon height="100%" width="100%" />
        </CharacterButton>
        <CharacterButton id={4} action={() => selectAvatar(4)}>
          <Character4Icon height="100%" width="100%" />
        </CharacterButton>
        <CharacterButton id={5} action={() => selectAvatar(5)}>
          <Character5Icon height="100%" width="100%" />
        </CharacterButton>
      </RowLayout>
      <RowLayout flex={0.17}>
        <IllusContent02 width={ILLUS_WIDTH} height={ILLUS_HEIGHT} />
        <CharacterButton id={6} action={() => selectAvatar(6)}>
          <Character6Icon height="100%" width="100%" />
        </CharacterButton>
        <IllusContent03 width={ILLUS_WIDTH} height={ILLUS_HEIGHT} />
      </RowLayout>
      <RowLayout flex={0.1} marginTop="8%">
        <ButtonArea disabled={!next} onPress={nextButtonAction}>
          <NextButtonSVG height="100%" />
        </ButtonArea>
      </RowLayout>
    </Container>
  );
};
