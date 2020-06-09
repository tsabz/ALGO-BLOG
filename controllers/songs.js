const express = require('express');
const router = express.Router();
const Songs = require('../models/songs.js')
const songsSeed = require('../models/seed.js')

// Songs.create(songsSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided songs data')
// })



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




////////////////////////////////////////////////////
router.post('/', (req, res)=>{
  console.log(`req.body ${JSON.stringify(req.body)}`);
  // Add likes field to req.body with a default value
    let blog = req.body;
    //Add likes field to Blog
    blog.likes = 0
    console.log(`blog ${JSON.stringify(blog)}`);
    Songs.create(req.body, (error, createdSongs) => {
      if (error)
        console.log(error)
      console.log(`Success creating a Blog`);
      res.redirect('/')
    })
});

router.get('/:id', (req, res) => {
    Songs.findById(req.params.id, (error, Songs) => {
      res.render(
        'show.ejs',
        {
          allSongs : Songs
        }
      );
    })
});

//////**** delete route **** //////
router.delete('/:id', (req, res) => {
  Songs.findByIdAndRemove(req.params.id, (error, deletedSongs) => {
    res.redirect('/')
  })
})

// ** Edit Route ** //
router.get('/:id/edit', (req, res) => {
  Songs.findById(req.params.id, (error, Songs) => {
    res.render(
      'edit.ejs',
      {
        allSongs: Songs
      }
    )
  })
})

// ** Update Route **
router.put('/:id', (req, res) => {
  Songs.findByIdAndUpdate(req.params.id, req.body, (err, updateModel) => {
    res.redirect('/')
  })
})



///** like button route ** ///
router.put('/:id/like', (req, res) => {
  Songs.findByIdAndUpdate(
    req.params.id,
    {$inc: {
      likes: +1
      }
    },
    (err, updateModel) => {
    res.redirect('/')
  })
})



module.exports = router
