import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test Header container in component <Header />', () => {

    const ContainerHeader = styled.View`  
        width: 100%;
        height: 180px;
        background-color: ${theme.light.colors.background};  
    `

    it('Should match with snapshot', () => {

        const container = render(<ContainerHeader />);

        expect(container).toMatchSnapshot()
    })
})