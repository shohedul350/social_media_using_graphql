import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

const authentication = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET);
        return user;
      } catch (error) {
        throw new AuthenticationError('invalid/Expired token');
      }
    }
    throw new Error('Authentication token must be bearer');
  }
  throw new Error('Authentication header must be bearer');
};
export default authentication;
