const express = require('express')
const usercontroller = require('../controller/index')
const app = express()

app.use(usercontroller)

    const LOGIN= [
    {
        email: "",
        password: "",
    }
  ]

    const EMAIL= [
    {
        email:"",
    }
  ]
   const PASSWORD= [
    {
        password: "",
        conformPassword:"",
    }
  ]

  const getlogin = (req,res)=>{
    res.send({
        message:'login for creating query',
        LOGIN
    })
  }

  const putemail = (req,res)=>{
    res.send({
        message:'Enter the email',
        EMAIL
    })
  }

  const putPassword = (req,res)=>{
    res.send({
        message:'Enter the password',
        PASSWORD
    })
  }


  module.export = {
    getlogin,
    putemail,
    putPassword

  }