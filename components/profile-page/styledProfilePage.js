import styled from 'styled-components/native'
import { View } from 'react-native'

export const ProfilePageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: green;

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