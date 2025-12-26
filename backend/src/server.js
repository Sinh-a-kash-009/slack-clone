import {ENV} from './config/env.js'
import express from 'express'
const app=express();
const PORT=ENV.PORT

app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})