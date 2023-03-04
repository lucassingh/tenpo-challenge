import React from 'react';
import styled, { css } from 'styled-components/native';
import { ImageBackground, Text } from 'react-native';
import { Favorite } from '../../interfaces/favorite';
import { Rating } from '../UI/Rating';

interface Props {
    favorite: Favorite;
}

export const ItemFavorite = ({ favorite }: Props) => {
    return (
        <ItemContainer>
            <Item>
                <ImageBackground
                    source={JSON.parse(favorite.img)}
                    style={{ width: '100%', height: '100%' }}
                    imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <TextContainer>
                    <DescriptionRow>
                        <Text>{favorite.description}</Text>
                        <Rating iconName={favorite.icon} rating={favorite.rating} />
                    </DescriptionRow>
                    <DescriptionRow>
                        <Title>{favorite.name}</Title>
                        <Text>{favorite.duration}</Text>
                    </DescriptionRow>
                </TextContainer>
            </Item>
        </ItemContainer>
    );
};

const ItemContainer = styled.View`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 150px;
        border: 1px solid ${theme.colors.lightGray};
        margin-right: 10px;
        border-radius: 10px;
    `}
`
const Item = styled.View`
    width: 100%;
    height: 60%;
`
const TextContainer = styled.View`
    height: 100%;
    padding: 10px;
`
const DescriptionRow = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    justify-content: space-between;
`
const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.secondary};
        font-weight: 700
    `}    
`