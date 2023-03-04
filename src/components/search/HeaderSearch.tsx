import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';

interface Props {
    title: string;
    icon: string
}

export const HeaderSearch = ({title, icon}: Props) => {
    return (
        <>
            <Container>
                <Icon name={icon} size={35} color='#00BAA4' >
                    <Text>{title}</Text>
                </Icon>
            </Container>
        </>
    );
};

const Container = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 150px;
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`
const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        color: ${theme.colors.secondary}
    `}    
`