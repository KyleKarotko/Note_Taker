const router = require ('express').Router();
const fs = require ('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const { v4: uuidv4 } = require('uuid');

const getNotes = () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes))) 
}
// get route for front end
router.get('/', (req, res) => {
    getNotes().then(notes => res.json(notes))
})
// post route for front end
router.post('/', (req,res) => {
    getNotes().then(notes => {
        const updatedNotes = [...notes, {title:req.body.title, text:req.body.text, id: uuidv4()}]
        console.log(updatedNotes)
        writeFile('db/db.json', JSON.stringify(updatedNotes)).then(()=>res.json({msg:'ok'}))
    })
})

//delete route for front end to delete a note from the list
router.delete('/:id', (req, res) => {
    const id = req.params.id;
   getNotes().then(oldNotes => {
    let filteredNotes = oldNotes.filter(note => note.id !== id)
    writeFile('db/db.json', JSON.stringify(filteredNotes)).then(()=>res.json({msg:'ok'}))
})
});



module.exports= router