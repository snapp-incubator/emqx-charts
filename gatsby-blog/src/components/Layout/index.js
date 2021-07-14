import * as React from 'react'
import {ThemeProvider} from 'styled-components'
// Styles
import {GlobalStyles, lightTheme, darkTheme} from 'styles/GlobalStyles'
// Hooks
import {useMetaDataQuery} from 'hooks/useMetaDataQuery'


const Layout = ({children}) => {
    const data = useMetaDataQuery()
    console.log(data)
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            Layout Component 
            {children}
        </ThemeProvider>
    )
}

export default Layout;
