import styled from 'styled-components/native'

export const TotalWrapper = styled.View`
    width: 75%;
    height: 50%;
    position: absolute;
    bottom: 50%;
    left: 12.5%;

${props => 
    props.active === true ? 
        `
            display: flex;
        `
    : props.active === false ?
        `           
            display: none;
        `
    : 
        `
            display: none;
        `
};
`
export const TotalText = styled.Text`
    font-size: 30px;
    text-align: center;
    color: #583252;
`