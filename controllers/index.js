const router = require("express").Router();

const categoryRoutes = require('./categoryRoutes')
router.use('/categories', categoryRoutes)

module.exports = router