const router = require ('express').Router();
const path = require ('path');
const apiRoutes = require ('./api');

// api route
router.use('/api', apiRoutes)

//HTML routes
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


// exports js file
module.exports= router

