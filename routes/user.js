import { Router } from 'express';

const router = Router();

// @method  POST api/users/
// @desc    Register a new user
// @access  Private
router.post('/', (req, res) => {
  res.send('Hey');
});

export default router;
