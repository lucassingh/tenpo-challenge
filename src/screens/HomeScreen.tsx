import React from 'react';
import { Header, Layout, MainLayout, CTA, SliderRestaurant, SliderCategories, SliderFavorites } from '../components';
import { SafeAreaView, ScrollView } from 'react-native';
import { categories, favorites, restaurants } from '../api/mockApi';

export const HomeScreen = () => {

    return (
        <Layout>

            <Header />

            <CTA text='Agregar direccion de entrega' icon='location-outline' />

            <MainLayout>
                <ScrollView>
                    <SliderRestaurant items={restaurants} subtitle='RESTAURANTES' />

                    <SliderCategories items={categories} subtitle='CATEGORÍAS' />

                    <SliderFavorites items={favorites} subtitle='TUS FAVORITOS' />
                </ScrollView>
            </MainLayout>
        </Layout>
    );
};
