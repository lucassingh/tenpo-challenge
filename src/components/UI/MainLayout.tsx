import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    title?: string;
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({children}) => {
    return (
        <Main>
            {children}
        </Main>
    );
};

const Main = styled.View `

    ${({ theme }) => css`
        height: auto;
        flex: 1;
        background-color: ${theme.colors.light};
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
        margin-top: -55px;
        padding: 10px 0px 30px 15px
    `}    
`
