const router = require("express").Router();

const categoryRoutes = require('./categoryRoutes');
router.use('/category', categoryRoutes);

const itemRoutes = require('./itemRoutes');
router.use('/item', itemRoutes)

const tagRoutes = require('./tagRoutes')
router.use('/tags', tagRoutes)

module.exports = router;