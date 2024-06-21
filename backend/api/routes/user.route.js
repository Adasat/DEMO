const { getUsers, getMyProfileByToken } = require('../controllers/user.controller')
const { checkAuth } = require('../middlewares/auth.middlewares')

const router = require('express').Router()

router.get('/', checkAuth,  getUsers)
router.get('/myprofile', checkAuth, getMyProfileByToken)
//router.get('/:id)

module.exports = router