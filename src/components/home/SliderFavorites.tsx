import React from 'react';
import { FlatList } from 'react-native';
import { SubHeader } from '../UI/SubHeader';
import styled from 'styled-components/native';
import { Favorite } from '../../interfaces/favorite';
import { ItemFavorite } from './ItemFavorites';

interface Props {
    items: Favorite[],
    subtitle: string
}

/**
 * This FC return a FlatList C 
 * @param param1 items array type Favorite[]
 * @param param2 subtitle type string
 * @returns Flatlist with array of favorites with subtitle
 */
export const SliderFavorites = ({ items, subtitle }: Props) => {

    return (
        <MainContainer>
            <SubHeader subTitle={subtitle} />

            <FlatList
                data={items}
                renderItem={({ item }: any) => <ItemFavorite favorite={item} />}
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