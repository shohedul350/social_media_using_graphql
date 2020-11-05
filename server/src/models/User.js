import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
},
{
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;
