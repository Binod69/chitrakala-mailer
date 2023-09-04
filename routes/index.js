const router = require('express').Router();

const homeRoutes = require('./home.routes');
const emailRoutes = require('./email.routes');

router.use('/', homeRoutes);
router.use('/email', emailRoutes);

module.exports = router;
