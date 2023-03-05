import React from 'react';
import styled, { css } from 'styled-components/native';

/**
 * This FC create a object to show offer items
 * @returns offer compoenent
 */
export const Offer = () => {
    return (
        <OfferContainer>            
            <TextOffer>50% DESC</TextOffer>
        </OfferContainer>
    );
};

const OfferContainer = styled.View`
    ${({ theme }) => css`
        display: flex;
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.secondary};
        position: absolute;
        right: 7px;
        top:-10px
        z-index: 10 
    `}    
`

const TextOffer = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.light}
        font-size: 7px; 
    `}
`