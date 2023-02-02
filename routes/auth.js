const {Router} = require('express')
const {getUsers, login, logout} = require('../controllers/userController')
const {ValidMiddleware} =require('../middleware/ValidMiddleware')
const {registr, protected} = require('../controllers/userController')
const {userAuth} = require('../middleware/AuthMIddleware')
const router =Router()


router.get('/getusers', getUsers)
router.get('/protected', userAuth, protected)
router.post('/registr', registr)
router.post('/login', login)
router.get('/logout', logout)


module.exports= router