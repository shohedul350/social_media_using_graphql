import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models/index';

const generateToken = (user) => {
  const token = jwt.sign({
    user,
  }, `${process.env.SECRET}`, { expiresIn: '24h' });
  return token;
};
const mutation = {
Mutation: {
    async login(_,
      {
        email,
        password,
      }) {
    // make sure user does not exit
      const user = await model.User.findOne({ email });
      if (!user) {
        console.log(user);
        // handle error
      // return res.status(500).json({ msg: 'Email already exists' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log('not match password');
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(_,
      {
        registerInput: {
          userName, email, password, confirmPassword,
        },
      }) {
    // make sure user does not exit
      const user = await model.User.findOne({ email });
      if (user) {
        console.log(user);
        // handle error
      // return res.status(500).json({ msg: 'Email already exists' });
      }
      const hash = await bcrypt.hash(password, 12);
      const newUser = new model.User({
        userName,
        email,
        password: hash,
      });
      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },

  },

};
export default mutation;
