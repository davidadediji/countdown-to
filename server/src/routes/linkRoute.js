const router = require('express').Router();
const 
Linker
= require('../controllers/link');


router.get("/", Linker.GetLink)
module.exports = router