import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from 'react-native'

export const ControlButtonWrapper = styled.View`
${props => 
    props.active === true ? 
        `
            width: 50%;
            height: 100%;
            z-index: 1002;
        `
    : props.active === false ?
        `
            width: 25%;
            height: 90%;
            z-index: 0;
        `
    : 
        `
        width: 25%;
        height: 90%;
        z-index: -1;
        `
};
`;

export const ControlButtonPressable = styled.Pressable`
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
`

export const ControlButtonText = styled.Text`
    align-items: center;
    justify-content: center;
    color: #2A1C36;
    font-size: 20px;
    text-align: center;
`