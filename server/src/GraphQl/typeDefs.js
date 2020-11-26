import { gql } from 'apollo-server-express';

export default gql`
type Post {
  id: ID!
  body: String!
  userName: String!
}
type User{
  id: ID!
  email: String!
  token: String!
  userName: String!
  createdAt: String
}
input RegisterInput {
  userName: String!
  password: String!
  confirmPassword: String!
  email: String!
  
}
  type Query {
    getPosts: [Post]
  }
  type Mutation{
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
  }
`;
