import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test OfferContainer and TextOffer in component in <Offer />', () => {

    const OfferContainer = styled.View`
        display: flex;
        width: 30px;
        height: 30px;
        padding: 5px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.light.colors.secondary};
        position: absolute;
        right: 7px;
        top:-10px;
        z-index: 10;    
    `

    it('Should match with snapshot', () => {

        const container = render(<OfferContainer/>);

        expect(container).toMatchSnapshot()
    })

    const TextOffer = styled.Text`
        color: ${theme.light.colors.light}
        font-size: 7px;
    `

    it('Should match with snapshot', () => {

        const container = render(<TextOffer />);

        expect(container).toMatchSnapshot()
    })
})