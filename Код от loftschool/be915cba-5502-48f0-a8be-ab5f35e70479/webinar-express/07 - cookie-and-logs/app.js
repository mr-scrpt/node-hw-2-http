const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const cookie = require('cookie-parser')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

const log = fs.createWriteStream('mylog.log', { flags: 'a' })

app.use(morgan('combined', { stream: log })) // combined (production) short tiny dev
app.use(cookie())

app.use('/', require('./routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Сервер запущен на порте: ' + server.address().port)
})
