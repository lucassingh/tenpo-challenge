import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test Layout component <Main />', () => {

        const Main = styled.View`
            display: flex;
            justify-content: center,
            align-items: center;
            flex: 1;
            background-color: ${theme.light.colors.background};
        `    
    
    it('Should match with snapshot', () => {

        const container  = render(<Main />);

        expect(container).toMatchSnapshot()
    })
})
