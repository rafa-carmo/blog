import { gql } from '@apollo/client'

export const QUERY_HOME_PAGE = gql`
  {
    posts {
      title
      slug
      coverImage {
        url
      }
      content {
        markdown
      }
    }
  }
`
