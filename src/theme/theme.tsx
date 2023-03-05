import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from ".";

type Props = {
    children: React.ReactNode
}

/**
 * This function export theme provider from SC to wrapper all children components
 * @param param children  
 * @returns provider from styled compoennt
 */
export function Theme({children}: Props) {
    return <ThemeProvider theme={theme.light}>
        {children}
    </ThemeProvider>
}