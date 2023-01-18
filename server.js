const express = require ('express');
const path =require ('path');
const routes = require('./routes')
const app = express();
// this allows heroku to use its own port and not just the generic 3000
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(routes);





app.listen(PORT,() => console.log('http://localhost:'+PORT))