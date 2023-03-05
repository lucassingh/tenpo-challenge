import React from "react";
import 'jest-styled-components'
import styled from 'styled-components/native';
import theme from "../../../src/theme";
import { render } from '@testing-library/react-native'

describe('Test main Layout component <Main />', () => {

     const Main = styled.View `  
        height: auto;
        flex: 1;
        background-color: ${theme.light.colors.background};
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
        margin-top: -55px;
        padding: 10px 0px 30px 15px;   
    `  
    
    it('Should match with snapshot', () => {

        const container  = render(<Main />);

        expect(container).toMatchSnapshot()
    })
})