import React from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    text: string;
    onPress: () => void
}

export const PrimaryButton = ({ text, onPress }: Props) => {
    return (
        <ContainerButton>
            <CTA onPress={onPress}>
                <TextButton>{text}</TextButton>
            </CTA>
        </ContainerButton>
    )
}

const ContainerButton = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CTA = styled.TouchableOpacity`
    ${({ theme }) => css`
        width: 95%;
        height: 60px;
        border-radius: 7px;
        //background-color: red;
        background-color: ${theme.colors.secondary}
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}   
`
const TextButton = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.light}
    `}    
`