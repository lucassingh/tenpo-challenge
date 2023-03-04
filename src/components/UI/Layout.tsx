import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    title?: string;
}

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
