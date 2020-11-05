import { gql } from 'apollo-server-express';

export default gql`
type Post {
  id: ID!
  body: String!
  userName: String!
}
  type Query {
    getPosts: [Post]
  }
`;
