import { Router } from 'express';

const router = Router();

// @method  POST
// @desc    Login user
// @access  Public
router.post('/', (req, res) => {
  res.send('Post auth');
});

export default router;
