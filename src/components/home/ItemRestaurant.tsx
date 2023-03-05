import React from 'react';
import styled, { css } from 'styled-components/native';
import { Restaurant } from '../../interfaces/restaurants';
import { ImageBackground } from 'react-native';
import { Text } from 'react-native';
import { Rating } from '../UI/Rating';
import { Offer } from '../UI/offer';

interface Props {
    restaurant: Restaurant;
}

/**
 * This FC return a card with information of each restaurant item
 * @param param restaurant object type: Category
 * @returns FC card restaurant
 */
export const ItemRestaurant = ({ restaurant }: Props) => {
    return (
        <>
            {
                restaurant.offer && <Offer />
            }
            
            <ItemContainer>
                <Item>
                    <ImageBackground
                        source={JSON.parse(restaurant.img)}
                        style={{ width: '100%', height: '100%' }}
                        imageStyle={{ borderRadius: 15 }}
                    />

                </Item>
                <TextContainer>
                    <Text>{restaurant.name}</Text>
                    <Rating iconName={restaurant.icon} rating={restaurant.rating} />
                </TextContainer>
            </ItemContainer>
        </>
    );
};

const ItemContainer = styled.View`
    display: flex;
    flex-direction: column;
`

const Item = styled.View`
    width: 95px;
    height: 95px;
    margin-right: 15px;
    border-radius: 15px;
    position: relative;
`

const TextContainer = styled.View`
    ${({ theme }) => css`
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${theme.colors.dark};
    `}   
`