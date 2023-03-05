import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface Props {
    iconName: string;
    rating: string
}

/**
 * This FC show rating info
 * @param param1 icon name type string
 * @param param2 rating text type string
 * @returns Rating component
 */
export const Rating = ({iconName, rating}: Props) => {
    return (
        <RatingContainer>
            <Icon name={iconName} color='#FFBF00' style={{marginRight: 3}} />
            <Text>{ rating }</Text>
        </RatingContainer>
    );
};

const RatingContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;    
`