import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  body: {
    type: String,
  },
  comments: [
    {
      body: {
        type: String,
      },
      userName: {
        type: String,
      },
      createdAt: {
        type: String,
      },
    },
  ],
  likes: [
    {
      userName: {
        type: String,
      },
      createdAt: {
        type: String,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
},
{
  timestamps: true,
});
const Post = mongoose.model('posts', postSchema);
export default Post;
