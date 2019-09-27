const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('pages/index', { title: 'My session', views: req.session.views })
})

module.exports = router
