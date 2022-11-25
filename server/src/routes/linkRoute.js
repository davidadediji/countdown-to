const router = require('express').Router();

const Link = require('../controllers/searchLink')




router.get("/search/:link", Link.SearchLink )

module.exports = router