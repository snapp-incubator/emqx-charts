import * as React from 'react'
import { Link } from 'gatsby'
// Styles
import { Nav } from './Menu.styles'

const Menu = ({ items }) => {
    return (
        <Nav>
            {items.map((item) => (
                <li key={items.id}>
                    <Link to={item.link} activeClassName="active">
                        {item.name}
                    </Link>
                </li>
            ))}
        </Nav>
    )
}

export default Menu
