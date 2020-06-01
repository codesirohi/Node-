const fs = require('fs')

const getNotes = function () {

    console.log('Your Notes....')
}

const addNote = function (title,body)
{
    const notes  = loadnotes()

    notes.push({

        title: title,
        body: body
        

    })

    saveNotes(notes)

}

const saveNotes = function(notes){

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const loadnotes = function(){

    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

        
    }catch (e){

        return []

    }
    
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    
}    