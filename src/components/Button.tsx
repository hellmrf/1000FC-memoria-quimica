import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

import { hex2rgba } from "../utils/colors";
import { Theme } from '../themes';
import { subSubTitleSize } from '../dimensions/text';


const ALPHA = 0.7;

export const BaseButton = styled.Pressable<{width?: number, height?:number}>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${(props => props.width || 100)}px;
    height: ${(props => props.height || 60)}px;
`;

export const PrimaryButon = (props: any) => {
    return (
        <BaseButton
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            style={({ pressed }) => pressed ? {...styles(props.theme).pressedButtonPrimary,...props.stylePressed} : {...styles(props.theme).normalButtonPrimary, ...props.styleNormal}}>
            {props.children}
            <Text style={{...styles(props.theme).labelPrimary, ...props.textStyle}}>
                {props.text || " "}
            </Text>
        </BaseButton>
    );
}

export default (props: any) => {
    return (
        <BaseButton 
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            style={({ pressed }) => pressed ? {...styles(props.theme).pressedButton, ...props.stylePressed} : {...styles(props.theme).normalButton, ...props.styleNormal}}>
            {props.children}
            <Text style={{...styles(props.theme).label, ...props.textStyle}}>
                {props.text || " "}
            </Text>
        </BaseButton>
    );
}

const styles = (theme: Theme): any => {
    return StyleSheet.create({
        label: {    
            fontSize: subSubTitleSize,
            fontFamily: theme.fonts.normal,
        },
        normalButton: {
            backgroundColor: theme.components.secondaryColor,
            paddingHorizontal: '2%'
        },
        pressedButton: {
            backgroundColor: hex2rgba(theme.components.secondaryColor, ALPHA),
            paddingHorizontal: '2%'
        },
        normalButtonPrimary: {
            backgroundColor: theme.components.primaryColor,
            paddingHorizontal: '2%'
        },
        pressedButtonPrimary: {
            backgroundColor: hex2rgba(theme.components.primaryColor, ALPHA),
            paddingHorizontal: '2%'
        },
        labelPrimary: {    
            fontSize: subSubTitleSize,
            fontFamily: theme.fonts.normal
        }
    });
};