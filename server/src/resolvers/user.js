const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import { User } from '../models/index'

export default {
Mutation: {
   async register(_, { registerInput: { userName, email, password, confirmPassword }, context, info }){
      const auth = await Model.User.findOne({ email });
      if (auth) {
      return res.status(500).json({ msg: 'Email already exists' });
    }
    bcrypt.hash(password, 11, (err, hash) => {
      if (err) {
        return res.status(500).json({ msg: 'Server Error' });
      }
      const newUser = new User({
        userName,
        email,
        password: hash,
      });
      newUser.save();
      const token = jwt.sign({
        newUser,
      }, `${process.env.SERCRET}`, { expiresIn: '24h' });

    });
    return{
      ...res._doc,
      id: res._id,
      token,
    }
  }
}
}