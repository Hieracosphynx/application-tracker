import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import Application from '../models/Application';
import auth from '../middleware/auth';

const router = Router();

// @method   GET api/applications/
// @desc     Get job applications for user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id });
    if (!applications) {
      res.status(200).json({ message: 'No data foound for user' });
    }

    res.status(200).json({ applications });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @method   POST api/applications/
// @desc     Add new job application
// @access   Private
router.post(
  '/',
  [
    auth,
    body('source', 'Source is required').not().isEmpty(),
    body('company', 'Company is required').not().isEmpty(),
    body('type', 'Job type is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors });
    }
    const { source, company, type, location } = req.body;

    try {
      let application = new Application({
        source,
        company,
        type,
        user: req.user.id,
      });
      if (location) application.location = location;

      application.save();
      res.status(200).json({ message: 'Successfully added application' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

// @method   PUT api/applications/
// @desc     Update specific job application
// @access   Private
router.put('/:id', auth, async (req, res) => {
  const { source, company, type, location } = req.body;
  let newApplication = {};
  if (source) newApplication.source = source;
  if (company) newApplication.company = company;
  if (type) newApplication.type = type;
  if (location) newApplication.location = location;

  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    let application = await Application.findById(id);
    console.log(application.user, userId);
    if (!application)
      return res.status(400).json({ message: 'No application found' });
    if (application.user.toString() !== userId)
      return res.status(401).json({ message: 'Unauthorized' });

    application = await Application.findByIdAndUpdate(
      id,
      {
        $set: newApplication,
      },
      { new: true }
    );

    res.status(200).json({ application });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @method   DELETE api/applications/
// @desc     Delete job application
// @access   Private
router.delete('/:id', (req, res) => {
  res.send(req.params.id);
});

export default router;
