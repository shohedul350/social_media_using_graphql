import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './GraphQl/typeDefs';
import resolvers from './resolvers/index';

dotenv.config({ path: './config/config.env' });
// Construct a schema, using GraphQL schema language

// Provide resolver functions for your schema fields

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
export default app;
