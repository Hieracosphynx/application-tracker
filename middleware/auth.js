import jwt from 'jsonwebtoken';
import config from 'config';

const auth = async (req, res, next) => {
  // Get token
  const token = req.header('x-auth-token');

  // If not token
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Invalid token' });
  }
};

export default auth;
