import styled from 'styled-components/native'
import { View } from 'react-native'

export const SettingsPageWrapper = styled.View`
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
export const SettingsPageTextPlaceholder = styled.Text`
    text-align: center;
    font-size: 25px;
`