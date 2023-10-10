const mongoose   = require('mongoose')

const apiUsersSchema = mongoose.Schema({
  user: {
    type: String,
    required : true
  },
  pass: {
    type: String,
    required: true
  },
  client_secret: String,
  required: true
})

const ApiUsersModel = mongoose.model("api_users", apiUsersSchema)
module.exports   = ApiUsersModel