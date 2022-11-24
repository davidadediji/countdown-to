const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send(`testing server`)
})


app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})