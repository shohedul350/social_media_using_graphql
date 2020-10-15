import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';

dotenv.config({ path: './config/config.env' });
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
export default app;
