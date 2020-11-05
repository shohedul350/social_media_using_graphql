import models from '../models/index';

const { Post } = models;
export default {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.log(error)
        throw new Error(error);
      }
    },
  },
};
