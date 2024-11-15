import express from 'express'
import {test} from '../controllers/userController.js'

const router = express.Router()

router.get('/test' , test)  //Best Practice is to make a function in a controller file and export it to this file and use it.


export default router
