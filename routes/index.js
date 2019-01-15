const express = require('express');
const router = express.Router();

// Do work here. Make sure to only send data once
router.get('/', (req, res) => {
  // const irina = { name: 'Irina', age: 39, cool: true }
  // res.json(irina)
  // res.send('Hey! It works!')
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Irina',
    // dog is a 'local' variable or a 'local'
    dog: req.query.dog
  })
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
