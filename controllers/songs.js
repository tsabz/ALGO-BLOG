const express = require('express');
const router = express.Router();
const Songs = require('../models/songs.js')

// ** GET ROUTES ** //
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.get('/', (req, res) => {
    Songs.find({}, (error, Songs) => {
        res.render(
            'index.ejs',
            {
                allSongs : Songs
            }
        );
    })
});


router.post('/', (req, res)=>{
  console.log(`req.body ${JSON.stringify(req.body)}`);
    Songs.create(req.body, (error, createdSongs) => {
      if (error)
        console.log(error)
      console.log(`Success creating a Blog`);
      res.redirect('/algoblog')
    })
});

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

//////**** delete route **** //////
router.delete('/:id', (req, res) => {
  Songs.findByIdAndRemove(req.params.id, (error, deletedSongs) => {
    res.redirect('/algoblog')
  })
})



module.exports = router
