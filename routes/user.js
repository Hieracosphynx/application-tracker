import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import User from '../models/User';

const router = Router();

// @method  POST api/users/
// @desc    Register a new user
// @access  Private
router.post(
  '/',
  body('username', 'Username is required')
    .not()
    .isEmpty()
    .trim()
    .isLength({ min: 3 }),
  body('password', 'Password is required').not().isEmpty().isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors });
    }
    const { username, password } = req.body;

    try {
      let user = await User.findOne({ username });
      if (user) {
        res.status(400).json({ message: 'Username already exist' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      user = new User({
        username,
        password: hashPassword,
      });

      user.save();
      res.status(200).json({ message: 'Successfully registered!' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Somnething went wrong' });
    }
  }
);

export default router;
