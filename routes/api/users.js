const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@route:  Get api/users
//@desc:   test route
//@access: public
router.post(
  '/',
  [
    check('name', 'Name is Required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('users route');
  }
);

module.exports = router;
