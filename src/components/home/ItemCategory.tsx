import React from 'react';
import styled, { css } from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { Category } from '../../interfaces/category';

interface Props {
    category: Category;
}

export const ItemCategory = ({ category }: Props) => {
    return (
        <ItemContainer>
            <Item>
                <ImageBackground
                    source={JSON.parse(category.img)}
                    style={{ width: '100%', height: '100%' }}
                    imageStyle={{ borderRadius: 10 }}
                />
                <TextItem>{category.name}</TextItem>
            </Item>
        </ItemContainer>
    );
};

const ItemContainer = styled.View`
    display: flex;
    flex-direction: column;
`

const Item = styled.View`
    width: 160px;
    height: 75px;
    margin-right: 10px;
    border-radius: 10px;
    position: relative
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextItem = styled.Text `
    ${({ theme }) => css`
        color: ${theme.colors.light}; 
        font-size: 12px;
        position: absolute; 
        letter-spacing: 3px; 
        font-weight:800;
    `}    
`