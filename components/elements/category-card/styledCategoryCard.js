import styled from 'styled-components/native'

export const CategoryCardWrapper = styled.View`
    width: 83%;
    height: 8.5%;
    border-radius: 10%;
    margin-top: 5%;
    justify-items: center;
`
export const CardTitle = styled.Text`
    font-size: 30px;
    align-self: flex-start;
    width: 40%;
    height: 75%;
    margin-left: 3%;
    color: #583252;
`
export const ClosePopUpPressable = styled.Pressable`
    height: 0;
    width: 0;
    background: red;
    margin-right: 200px;
`
export const SubmitPopUpPressable = styled.Pressable`
    height: 0;
    width: 0;
    background: red;
    margin-right: 200px;
`
export const PopUpContentWrapper = styled.View`
    justify-items: center;
    justify-cont: center;
    align-items: center;
    width: 100%;
    height: 70%;
`
export const PopUpWrapper = styled.View`
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100%;
`
export const PopUpInput = styled.TextInput`
    background: white;
    height: 25%;
    width: 80%;
    margin: 12px;
    border: 1px solid #583252;
    padding: 9px;
    font-size: 30px;
    text-align: right;
    border-radius: 10px;
`