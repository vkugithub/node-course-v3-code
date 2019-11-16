const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

console.log(chalk.green.inverse.bold('Success!'))
//console.log(process.argv)

//console.log(process.argv[2])

yargs.version('9.9.9')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
    handler(argv){
    console.log('Add a new note')
     console.log('Title is =' + argv.title +' and body is = '+ argv.body)
     notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Remove a note')
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)