import models from '../models/index';
import Authentication from '../utils/authentication';

const Post = models.Post;
const postResolver = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('post not found');
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    Mutation: {
      async createPost(_, { body }, context) {
        const user = Authentication(context);
        const newPost = new Post({
          body,
          user: user._id,
          userName: user.userName,
        });
        const post = await newPost.save();
        return post;
      },
    },
  },
};
export default postResolver;
