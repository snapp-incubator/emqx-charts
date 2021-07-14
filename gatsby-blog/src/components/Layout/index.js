import * as React from 'react'
import {ThemeProvider} from 'styled-components'
// Styles
import {GlobalStyles, lightTheme, darkTheme} from 'styles/GlobalStyles'

const index = ({children}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            Layout Component 
            {children}
        </ThemeProvider>
    )
}

export default index;
