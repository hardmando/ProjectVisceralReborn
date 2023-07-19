import styled from 'styled-components/native'
import { View } from 'react-native'

export const SettingsPageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: blue;
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