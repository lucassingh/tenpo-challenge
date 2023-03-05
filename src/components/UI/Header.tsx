import React from 'react';
import { ImageBackground } from 'react-native';
import styled, { css } from 'styled-components/native';
import { imgHeader } from '../../../assets/imgs';
import { UserNav } from './UserNav';

/**
 * This FC return a main header for home screen
 * @returns Header
 */
export const Header = () => {
    return (
        <>
            <UserNav />
            <ContainerHeader>
                <ImageBackground source={imgHeader} style={{ width: '100%', height: '100%', }} />
            </ContainerHeader>
        </>
    );
};

const ContainerHeader = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 180px;
        background-color: ${theme.colors.background};
    `}
`