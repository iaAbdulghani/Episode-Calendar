const express = require('express')

const cors = require('cors')


const app = express()

app.use(cors())
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.get('/',(req,res)=>{
    res.send("Hi")
})

app.listen(process.env.PORT||5050, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });