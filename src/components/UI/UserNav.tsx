import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { avatar } from '../../../assets/imgs';

/**
 * This FC show navbar header with avatar user and icon
 * @returns nav bar compoenent
 */
export const UserNav = () => {
    return (
        <UserNavcontainer>
            <Image source={avatar} />
            <Icon name='search-outline' color='#00BAA4' size={30} />
        </UserNavcontainer>
    );
};

const UserNavcontainer = styled.View`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    flex-direction: row;
    align-items: center;
    margin-top: 50px
`