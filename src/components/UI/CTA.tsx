// @ts-nocheck
import React from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
    text: string;
    icon: string;
}

/**
 * This FC return a CTA with title and icon for home screen
 * @param param1 tltle type string
 * @param param2 icon name type string
 * @returns CTA button
 */
export const CTA = ({ text, icon }: Props) => {

    const navigation = useNavigation()

    return (
        <Container>
            <Icon name={icon} size={25} color='#00BAA4' >
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </Icon>
        </Container>
    );
};

const Container = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 15%;
        background-color: ${theme.colors.primary};
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
        display: flex;
        padding-top: 5%;
        justify-content:start;
        align-items: center;
    `}
`

const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        color: ${theme.colors.secondary};
    `}
`