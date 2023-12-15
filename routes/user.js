const express = require('express')
const userdata = require('../model/user')
const router = express.router()

router.get('/LOGIN',userdata.getlogin)
router.put('/EMAIL',userdata.putemail)
router.put('/PASSWORD',userdata.putpassword)

module.export = router