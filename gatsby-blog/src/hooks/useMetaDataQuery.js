import * as React from 'react'

import { useStaticQuery, graphql } from "gatsby"

export const useMetaDataQuery = () => {
    const data = useStaticQuery(graphql`
    query MetaDataQuery {
        site {
            siteMetadata {
                author
                description
                title
            }
        }
    }
    `)
    return data.site.siteMetadata
}
