const express = require('express');
const router = express.Router();
const Songs = require('../models/songs.js')

// ** GET ROUTES ** //
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

router.get('/seed', (req, res) => {
  Songs.create(
    seed,
    (err, data) => {
      res.redirect('/')
    }
  )
})


router.get('/new', (req, res) => {
  res.render('new.ejs')
})


router.get('/:id', (req, res) => {
    Songs.findById(req.params.id, (error, Songs) => {
      res.render(
        'show.ejs',
        {
          allSongs: Songs
        }
      );
    })
});



module.exports = router
