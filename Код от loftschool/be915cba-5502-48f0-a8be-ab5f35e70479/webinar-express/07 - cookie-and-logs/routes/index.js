const express = require('express')
const router = express.Router()

const ctrlHome = require('../controllers/home')
const ctrlAbout = require('../controllers/about')
const ctrlContact = require('../controllers/contact')

router.get('/', ctrlHome.get)
router.post('/set', ctrlHome.setCookie)
router.post('/clear', ctrlHome.clearCookie)

router.get('/about', ctrlAbout.get)
router.get('/contact', ctrlContact.get)

module.exports = router
