const router = require('express').Router();
const 
Linker
= require('../controllers/link');


router.get("/:id/:slug", Linker.GetLink)
module.exports = router