import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

import theme from "../themes";
import { subSubTitleSize } from "../dimensions/text";
import { Theme } from '../themes';

const P_MODAL_SECTIONS = {header: 0.1, content: 0.8, footer: 0.1};

export const ModalHeader = (props: any) =>  {
    return (
        <View style={{...styles.modalHeader, ...props.style}}>
            {props.children}
        </View>
    );
}

export const ModalContent = (props: any) => {
    return (
        <View style={{...styles.modalContent, ...props.style}}>
            {props.children}
        </View>
    );
}

export const ModalFooter = (props: any) => {
    return (
        <View style={{...styles.modalFooter, ...props.style}}>
            {props.children}
        </View>
    );
}

export const Body = (props: any) => {
    return (
        <View style={{...styles.body, ...props.style}}>
            {props.children}
        </View>
    )
}

export default (props: any) => {
    return(
        <Modal visible={props.visible} onDismiss={( ) => console.log("Fechei")} transparent={true} animationType={props.animationType || "slide"}>
           {props.children}
        </Modal>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: '4%',
        alignSelf: 'center',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.9,
        backgroundColor: 'white'
    },
    modalHeader: {
        flex: P_MODAL_SECTIONS.header,
        alignContent: "center",
        alignItems: "center",
        width: '100%',
        marginTop: '2%'
    },
    modalContent:{
        flex: P_MODAL_SECTIONS.content,
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        alignContent: "center",
        alignItems: "center",
    },
    
    modalFooter: {
        flex: P_MODAL_SECTIONS.footer,
        width: '100%',
        alignContent: "center",
        alignItems: "center",
    }
});
