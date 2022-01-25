import React, { useState } from "react";
import styled from "styled-components/native";
import {Dimensions, StyleSheet, Text, View } from "react-native";

import { subSubTitleSize } from "../dimensions/text";
import { Theme } from '../themes';
import Modal, { Body, ModalHeader, ModalContent, ModalFooter } from "./Modal";
import GameCard from "./GameCard";
import ButtonIcon from "./ButtonIcon";
import Button, { PrimaryButon } from "./Button";

import XIcon from "../assets/icons/x.svg";
import CIcon from "../assets/icons/c.svg";
import { hex2rgba } from "../utils/colors";


const ALPHA = 0.2
const P_HEIGHT = 70; // Must between (0, 100].
const pModalSections = {header: 0.2, content: 0.6, footer: 0.2};

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;


const TitleText = styled.Text<{
    theme: Theme;
    horizontalPadding?: string;
    verticalPadding?: string;
  }>`
    font-family: ${({ theme }) => theme.fonts.normal};
    text-align: center;
    color: black;
    padding-horizontal: ${props => props.horizontalPadding || '0%'};
    padding-vertical: ${props => props.verticalPadding || '0%'};
    font-size: ${subSubTitleSize}px;
  `;

const SelectedCardsView = (props: any) =>{
    return (
        <View style={styles(props.theme).selectedCardsView}>
            <GameCard key={0} cardSize={SCREEN_WIDTH / 2.3} borderWidth={1}/>
            <GameCard key={1} cardSize={SCREEN_WIDTH / 2.3} borderWidth={1}/>        
        </View>
    );
};


const RowLayout = (props: any) => {
    return (
        <View style={styles(props.theme).row}>
            {props.children}
        </View>
    );
}

export default (props: any) => {
    //const [isVisible, setIsVisible] = useState(false);
    
    const checkAnswer = (answer: boolean) => {
        props.setVisibility(false)
    }

    const theme = props.theme;
    //<Button  title="Não"></Button>
    //<Button onPress={() => checkAnswer(true)}title='Sim'></Button>
    return(
        <Modal visible={props.isVisible} onClose={props.onClose}>
           <Body style={styles(theme).body} theme={theme}>
               <ModalHeader style={styles(theme).modalHeader} theme={theme}>
                   <TitleText theme={theme}>Essas cartas formam um par?</TitleText>
               </ModalHeader>
               <ModalContent style={styles(props.theme).modalContent} theme={props.theme}>
                    <SelectedCardsView theme={theme}>
                    </SelectedCardsView>
               </ModalContent>
               <ModalFooter style={styles(theme).modalFooter}>
                   <RowLayout theme={props.theme}>
                        <ButtonIcon 
                            onPress={() => checkAnswer(false)}
                            theme={theme} text='Não' styleNormal={styles(theme).buttonNormal} stylePressed={styles(theme).buttonPressed}>
                            <XIcon width='20%' fill='white' />
                        </ButtonIcon>
                        <ButtonIcon 
                            onPress={() => checkAnswer(true)}
                            theme={theme} text='Sim' styleNormal={styles(theme).buttonNormal} stylePressed={styles(theme).buttonPressed}>
                            <CIcon width='20%' fill='white' />
                        </ButtonIcon>
                   </RowLayout>
               </ModalFooter>
            </Body>
        </Modal>
    );
}


const styles = (theme: Theme) => StyleSheet.create({
    body: {
        marginTop:'30%',
        paddingHorizontal: '2%'
    },
    modalHeader: {
        flex: pModalSections.header
    },
    modalContent:{
        flex: pModalSections.content,
        justifyContent: 'center'
    },
    modalFooter:{
        flex: pModalSections.footer,
    },
    cardView: {
        flex: 0.5,
        backgroundColor: 'white',
        borderWidth: 10,
        borderRadius: 5,
        borderColor:'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: 0.5 * SCREEN_WIDTH,
        margin: '2%'
    },
    selectedCardsView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'rgba(52, 52, 52, 0)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "stretch",
        alignContent: 'space-around',
        width: '100%',
        paddingVertical: "2%",
        paddingHorizontal: '10%'
    },
    buttonNormal: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    buttonPressed: {
        backgroundColor: hex2rgba(theme.components.primaryColor, ALPHA)
    }
});
