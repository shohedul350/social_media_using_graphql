import postResolvers from './post';
import userResolver from './user';

const resolver = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
};
export default resolver;
