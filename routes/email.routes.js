const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('email sent');
});

module.exports = router;
