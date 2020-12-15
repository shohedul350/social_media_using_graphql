import postResolvers from './post';
import userResolver from './user';

const resolver = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postResolvers.Mutation,
  },
};
export default resolver;
