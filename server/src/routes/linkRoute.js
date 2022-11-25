const router = require('express').Router();
const 
Linker
= require('../controllers/link');


app.get("/", Linker.GetLink)
module.exports = router