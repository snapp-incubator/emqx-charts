import { useStaticQuery, graphql } from "gatsby"

export const useConfigQuery = () => {
    const data = useStaticQuery(graphql`
    {
        query ConfigQuery {
            markdownRemark(frontmatter: {type: {eq: "config"}}) {
                frontmatter {
                    logo {
                        publicURL
                    }
                    menu {
                        id
                        link
                        name
                    }
                }
            }
        }
    }
  `)
    return data.markdownRemark.frontmatter
}
