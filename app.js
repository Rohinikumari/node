const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('hey i am here')
 })

 app.listen(3000,()=>{
     console.log(`what's up?`)
 })