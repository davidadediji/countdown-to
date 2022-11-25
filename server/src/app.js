const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const {dbConnect} = require('./db/connect')
const countdown = require('./routes/countdownRoute')


dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const url = String(process.env.MONGO_URI)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/v1/countdown', countdown)


app.get('/', (req, res)=>{
    res.send(`testing server`)
})


app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
    dbConnect(url)
})