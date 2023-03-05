import React from 'react';
import { FlatList } from 'react-native';
import { SubHeader } from '../UI/SubHeader';
import styled from 'styled-components/native';
import { ItemCategory } from './ItemCategory';
import { Category } from '../../interfaces/category';

interface Props {
    items: Category[],
    subtitle: string
}

/**
 * This FC return a FlatList C 
 * @param param1 items array type Category[]
 * @param param2 subtitle type string
 * @returns Flatlist with array of categories with subtitle
 */
export const SliderCategories = ({ items, subtitle }: Props) => {

    return (
        <MainContainer>
            <SubHeader subTitle={subtitle} />

            <FlatList
                data={items}
                renderItem={({ item }: any) => <ItemCategory category={item} />}
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
