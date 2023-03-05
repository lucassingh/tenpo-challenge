import React from 'react';
import styled, { css } from 'styled-components/native';

interface Props {
    subTitle: string;
}

/**
 * This FC create a subtitle reusable
 * @param param1 subtitle type string
 * @returns sub header component
 */
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