import React from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    subTitle: string;
}

export const SubHeader = ({ subTitle }: Props) => {
    return (
        <Text>{subTitle}</Text>
    );
};

const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        padding-top: 7px;
        padding-bottom: 15px;
        color: ${theme.colors.dark};
    `}    
`