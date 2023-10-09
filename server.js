require('dotenv').config()

const express    = require('express')
const mongoose   = require('mongoose')
const parser     = require('body-parser')
const userRouter = require('./v1/request.js')
const render     = require('ejs')
const path       = require('path')
const app        = express();

app.set('ejs', render.__express)
app.set('view engine', 'ejs')
app.use('/views', express.static(path.join(__dirname, "../views")))
app.use(parser.json(), parser.urlencoded({ extended: true }))
app.use(userRouter, )

mongoose.connect(process.env.MONGO_URI, {})
  .then((res) => {
    app.listen(3080, (err) => {
      if (err) throw err
      console.log('Server running and waiting for Marcuss')
    })
  })
  .catch(err => { if (err) throw err })