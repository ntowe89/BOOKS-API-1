require('dotenv').config()
//Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


//Configeration

const PORT = process.env.PORT
const app = express()

//Middleware
app.use(cors())
app.use(express.json())

const corsOptions = {
    origin: 'localhost:3005/',
    optionSuccessStatus: 200
}


//Routes
app.get('/books/:id', (req, res, next) => {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/', (req, res) => {
    console.log('Hello World!')
    res.send('Hello World!')
})

//Books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

mongoose.connect(process.env.MONGO_URL).then( () => {
    console.log('Database connected')
    app.listen(PORT, () => {
        console.log('CORS-enabled web server listening on port' ,  PORT)
    })
})
