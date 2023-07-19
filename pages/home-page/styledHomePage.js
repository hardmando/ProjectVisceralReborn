import styled from 'styled-components/native'

export const HomePageWrapper = styled.View`
    width: 100%;
    height: 100%;
    background: white;
    justify-items: center;
    align-items: center;

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
export const HomePageScrollWrapper = styled.ScrollView`
    width: 100%;
    height: 500px;
`