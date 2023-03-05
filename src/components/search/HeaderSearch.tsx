import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { css } from 'styled-components/native';

interface Props {
    title: string;
    icon: string
}

/**
 * This FC return a header with title and icon for search screen
 * @param param1 tltle type string
 * @param param2 icon name type string
 * @returns FC header
 */
export const HeaderSearch = ({title, icon}: Props) => {
    return (
        <>
            <ContainerSearch>
                <Icon name={icon} size={35} color='#00BAA4' >
                    <TextSearch>{title}</TextSearch>
                </Icon>
            </ContainerSearch>
        </>
    );
};

const ContainerSearch = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 170px;
        background-color: ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`
const TextSearch = styled.Text`
    ${({ theme }) => css`
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        color: ${theme.colors.secondary};
    `}    
`