import gql from 'graphql-tag'


export const GET_POSTS = gql`
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

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const GET_INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`

