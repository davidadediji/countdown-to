const router = require('express').Router();
const Linker
= require('../controllers/link');
const Link = require('../controllers/searchLink')



router.get("/:id", Linker.GetLink)
router.get("/search/:link",Link.SearchLink )

module.exports = router