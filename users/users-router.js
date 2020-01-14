const router = require('express').Router();
const Users = require('./users-model'); // users model

router.get('/', (req, res) => {
  res.send('from the users router');
});

module.exports = router;
