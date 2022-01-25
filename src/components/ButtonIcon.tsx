
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Button from "./Button";

export default (props: any) => {
    const [pressed, setPressed] = useState(false);

    const animateClick = () => {

    }

    return (
        <Button 
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            theme={props.theme} 
            text={props.text}
            stylePressed={{...styles.buttonPressed, ...props.stylePressed}}
            styleNormal={{...styles.buttonNormal, ...props.styleNormal}}
            textStyle={styles.label}>
            {props.children}
        </Button>

    );
}

const styles = StyleSheet.create({
    label: {
       width: '70%',
       marginLeft: '10%'
    },
    buttonNormal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
    },
    buttonPressed: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
    }

});