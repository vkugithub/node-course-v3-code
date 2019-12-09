const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    },
         owner: {
             type: mongoose.Schema.Types.ObjectId,
             required: true,
             ref: 'User'
         }
})

module.exports = Task