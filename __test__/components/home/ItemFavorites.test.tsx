import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test ItemContainer and text in component <ItemFavorites />', () => {

    const ItemContainer = styled.View`
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 150px;
        border: 1px solid ${theme.light.colors.lightGray};
        margin-right: 10px;
        border-radius: 10px;
    `

    it('Should match with snapshot', () => {

        const container = render(<ItemContainer />);

        expect(container).toMatchSnapshot()
    })

    const Title = styled.Text`
        color: ${theme.light.colors.secondary};
        font-weight: 700; 
    `

    it('Should match with snapshot', () => {

        const container = render(<Title />);

        expect(container).toMatchSnapshot()
    })
})