import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test Container and text in component in <CTA />', () => {

    const Container = styled.View`
        width: 100%;
        height: 15%;
        background-color: ${theme.light.colors.primary};
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
        display: flex;
        padding-top: 5%;
        justify-content:start;
        align-items: center;
    `

    it('Should match with snapshot', () => {

        const container = render(<Container />);

        expect(container).toMatchSnapshot()
    })

    const Text = styled.Text`
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        color: ${theme.light.colors.secondary};
    `

    it('Should match with snapshot', () => {

        const container = render(<Text />);

        expect(container).toMatchSnapshot()
    })
})