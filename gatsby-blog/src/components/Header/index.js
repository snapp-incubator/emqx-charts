import * as React from 'react'
import {Link} from 'gatsby'
// Hooks
import {useConfigQuery} from 'hooks/useConfigQuery'
// Styles
import {Wrapper, Logo} from './Header.styles'

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useConfigQuery()
    return (
        <Wrapper>
            <Link to="/">
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
        </Wrapper>
    )
}

export default Header
