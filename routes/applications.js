import { Router } from 'express';

const router = Router();

// @method   GET api/applications/
// @desc     Get job applications for user
// @access   Private
router.get('/', (req, res) => {
  res.send('Get Applications');
});

// @method   POST api/applications/
// @desc     Add new job application
// @access   Private
router.post('/', (req, res) => {
  res.send('Post applications');
});

// @method   PUT api/applications/
// @desc     Update specific job application
// @access   Private
router.put('/:id', (req, res) => {
  res.send(req.params.id);
});

// @method   DELETE api/applications/
// @desc     Delete job application
// @access   Private
router.delete('/:id', (req, res) => {
  res.send(req.params.id);
});

export default router;
