const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = router;
