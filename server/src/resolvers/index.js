import postResolvers from './post';

const resolver = {
  Query: {
    ...postResolvers.Query,
  },
};
export default resolver;
