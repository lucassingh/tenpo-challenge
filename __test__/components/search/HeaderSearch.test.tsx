import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test Container search and text search in component <HeaderSearch />', () => {

    const ContainerSearch = styled.View`
        width: 100%;
        height: 170px;
        background-color: ${theme.light.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    `

    it('Should match with snapshot', () => {

        const container = render(<ContainerSearch />);

        expect(container).toMatchSnapshot()
    })

    const TextSearch = styled.Text`
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        color: ${theme.light.colors.secondary};
    `

    it('Should match with snapshot', () => {

        const container = render(<TextSearch />);

        expect(container).toMatchSnapshot()
    })
})