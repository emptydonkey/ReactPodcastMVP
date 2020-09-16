const express = require('express');
const router = express.Router();
const axios = require('axios')


module.exports = router.get('/default', (req, res, next) => {
  console.log('/default')
  axios.get('https://itunes.apple.com/search?term=podcast&entity=podcast&limit=10')
  .then(response => {
console.log(response.data.results)
    res.json(response.data.results)
  })
  .catch(err =>{
    res.send(err)
  });
})