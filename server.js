const express = require('express')
const traineeRoutes = require('./src/trainee/routes')

const app = express()
const port = 6655

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello mundo!')
})

app.use('/api/v1/apirestnode',traineeRoutes)
app.listen(port,()=> console.log(`server running on port ${port}`))