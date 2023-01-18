const router = require ('express').Router();
const fs = require ('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const getNotes = () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes))) 
}
router.get('/', (req, res) => {
    getNotes().then(notes => res.json(notes))
})
router.post('/', (req,res) => {
    getNotes().then(notes => {
        const updatedNotes = [...notes, {title:req.body.title, text:req.body.text, id:1}]
        console.log(updatedNotes)
        writeFile('db/db.json', JSON.stringify(updatedNotes)).then(()=>res.json({msg:'ok'}))
    })
})
module.exports= router