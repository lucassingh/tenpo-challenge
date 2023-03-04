import React from 'react';
import { HeaderSearch, PrimaryButton, SearchBar } from '../components';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

export const SearchScreen = () => {

    const search = () => {
        console.log('search')
    }

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <HeaderSearch title='Agregar direccion de entrega' icon='location-outline' />
            <SearchBar />

            <MapContainer>
                {/*mapa*/}
            </MapContainer>

            <AdresssContainer>
                <Title>Agregar información de entrega</Title>
                <Subtitle style={{ color: '#CCCCCC', marginTop: 6 }}>Depto, Oficina, Piso, BLock</Subtitle>
                <TextArea />
                <PrimaryButton text='AGREGAR DIRECCIÓN' onPress={search} />
            </AdresssContainer>
        </ScrollView>
    );
};

const MapContainer = styled.View`
    justify-content: center,
    align-items: center;
    //background-color: red;
    height: 200px;
    margin-top: -30px;
    z-index: -99;
`
const AdresssContainer = styled.View`
    padding: 40px 20px;
`
const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.lightGray}; 
        margin-Top: 6px;
    `}    
`
const TextArea = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 150px;
        border: 1px solid ${theme.colors.lightGray};
        border-radius: 15px;
        padding: 15px;
        margin-top: 12px;
    `}    
`

