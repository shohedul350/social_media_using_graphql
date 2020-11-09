import postResolvers from './post';
import userResolver from './post';

const resolver = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
};
export default resolver;
