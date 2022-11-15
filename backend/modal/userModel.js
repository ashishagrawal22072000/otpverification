const mongoose = require('mongoose')

const userSchema = new Schema({
  userName: {
    type: String,
  },
  phone: {
    type: String,
  },
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel
