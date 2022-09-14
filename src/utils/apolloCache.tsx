import { InMemoryCache } from '@apollo/client'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {}
    }
  }
})

// import { concatPagination } from '@apollo/client/utilities'
// chapters: concatPagination(['where', 'sort'])
