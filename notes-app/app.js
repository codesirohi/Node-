const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    description: 'add new note',
    builder:{
        title:{
            description:'add note title',
            demandOption: true,
            type: 'string',
        
        body:{
            description:'add the content',
            demandOption: true,
            type: 'string',
        }
        }
    },
    handler: function(argv) {
        console.log('Title:  ' + argv.title );
        console.log('Content:  ' + argv.body );

    }
})

yargs.command({
    command: 'remove',
    description: 'remove note',
    handler: function() {
        console.log(' Note Removed');
    }
})

yargs.command({
    command: 'list',
    description: 'display the list',
    handler: function() {
        console.log('List Displayed');
    }
})

yargs.command({
    command: 'read',
    description: 'show the notes',
    handler: function() {
        console.log('Here are your Notes');
    }
})



yargs.parse();