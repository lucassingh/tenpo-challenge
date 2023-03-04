import React from "react";
import { Layout } from "../../../src/components";
import { render } from '@testing-library/react-native'

describe('Test Layout component <Layout />', () => {
    
    it('Should match with snapshot', () => {

        const container  = render(<Layout />);

        expect(container).toMatchSnapshot()
    })
})
