import * as React from 'react'
import { Link } from 'gatsby'

const Menu = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <Link to={item.link} activeClassName="active">
                        <li key={items.id}>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Menu
