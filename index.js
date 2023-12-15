const express = require('express')
const userrouter = require('../routes/user')
const app = express()

app.use(express.json());
app.use(userrouter)

app.listen(8000, () => console.log('server is listening to port 8000'));