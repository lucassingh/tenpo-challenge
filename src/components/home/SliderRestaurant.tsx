import React from 'react';
import { FlatList } from 'react-native';
import { Restaurant } from '../../interfaces/restaurants';
import { ItemRestaurant } from './ItemRestaurant';
import { SubHeader } from '../UI/SubHeader';
import styled from 'styled-components/native';

interface Props {
    items: Restaurant[],
    subtitle: string
}

/**
 * This FC return a FlatList C 
 * @param param1 items array type Restaurant[]
 * @param param2 subtitle type string
 * @returns Flatlist with array of restaurant with subtitle
 */
export const SliderRestaurant = ({ items, subtitle }: Props) => {

    return (
        <MainContainer>

            <SubHeader subTitle={subtitle} />

            <FlatList
                style={{ paddingTop: 12}}
                data={items}
                renderItem={({ item }: any) => <ItemRestaurant restaurant={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </MainContainer>
    );
};

const MainContainer = styled.View `
    padding: 10px 0 25px 0;
`
