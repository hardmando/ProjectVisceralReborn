import styled from 'styled-components/native'
import { View } from 'react-native'

export const ProfilePageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: white;
    justify-content: center;
    align-content: center;

${props =>
    props.active === false ? 
        `
        display: none;
        `
    :
        `
        dispay: flex;
        `
}
`
export const ProfilePageTextPlaceholder = styled.Text`
    text-align: center;
    font-size: 25px;
`