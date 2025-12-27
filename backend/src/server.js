import { ENV } from './config/env.js'
import express from 'express'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { inngest, functions } from './config/inngest.js'
import { serve } from "inngest/express";
const app = express();
const PORT = ENV.PORT

app.use(express.json()) // parse json data 
app.use(clerkMiddleware())
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
const startServer = async () => {
    try {
        await connectDB();
        if (ENV.NODE_ENV === 'development') {
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`)
                connectDB()
            })
        }
    } catch (error) {
        console.error('error staring server :',error)
        process.exit(1); //Exit the process with a failure code 
    }
}

startServer();


export default app;