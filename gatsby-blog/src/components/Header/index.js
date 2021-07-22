import * as React from 'react'
import {Link} from 'gatsby'
// Hooks
import {useConfigQuery} from 'hooks/useConfigQuery'

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useConfigQuery()
    return (
        <div>
            <Link to="/">
                <img src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
        </div>
    )
}

export default Header
