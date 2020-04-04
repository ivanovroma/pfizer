// Libs init 
import mongoose from 'mongoose'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import body_parser from 'body-parser'
// Libs init 

import config from './config'

// Routes init
import UserRouter from './api/User/router'
import DepartmentRouter from './api/Department/router'
import CardRouter from './api/Card/router'
// Routes init


// MongoDB init
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/${config.db}`, { useNewUrlParser: true, autoIndex: false })
  .then( () => console.log('Подключился к MongoDB.') )
  .catch( () => console.log('Запусти MongoDB.') )
// MongoDB init


// Server init
const server = express()

server.listen(config.port, err => {
  if (err) throw err

  console.log(`Сервер запущен на ${config.port} порту.`)
})

server.use( cors() )
server.use( morgan('tiny') )
server.use( body_parser.json() )
server.use( body_parser.urlencoded({ extended: true }) )

server.use('/api/user', UserRouter)
server.use('/api/department', DepartmentRouter)
server.use('/api/card', CardRouter)
// Server init

// brew services start mongodb-community@4.2