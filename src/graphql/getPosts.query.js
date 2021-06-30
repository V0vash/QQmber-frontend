import gql from 'graphql-tag'


export const GET_POSTS =gql`
  query {
      getPosts {
              _id
              title
              imageUrl
              description
              likes
            }
      }
  `