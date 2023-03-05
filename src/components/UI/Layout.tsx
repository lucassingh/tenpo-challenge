import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    title?: string;
}

/**
 * This FC create a container layout reusable
 * @param param1 Children props expect a components
 * @param param2 optional param title type string
 * @returns layout compoenent
 */
export const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <Main>
            {children}
        </Main>
    );
};

const Main = styled.View`
    ${({ theme }) => css`
        display: flex;
        justify-content: center,
        align-items: center;
        flex: 1;
        background-color: ${theme.colors.background}
    `}
`
