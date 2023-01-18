const express = require ('express');
const path =require ('path');
const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3001;

// GET /notes should return the notes.html file.

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(routes);





// GET /api/notes should read the db.json file and return all saved notes as JSON.


// POST /api/notes should receive a new note to save on the request body, add it to 
// the db.json file, and then return the new note to the client. You'll need to find 
// a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. 
// To delete a note, you'll need to read all notes from the db.json file, remove the note with the given
// id property, and then rewrite the notes to the db.json file

app.listen(PORT,() => console.log('http://localhost:'+PORT))