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
