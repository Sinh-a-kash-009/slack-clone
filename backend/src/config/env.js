import dotenv from 'dotenv'
import path from 'path'
import {fileURLToPath} from'url'

const _fileName=fileURLToPath(import.meta.url)
const _dirName=path.dirname(_fileName)

dotenv.config({
    path:path.join(_dirName,'../../.env')
})

export const ENV={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    NODE_ENV:process.env.NODE_ENV ,
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET  ,
    SENTRY_DSN:process.env.SENTRY_DSN,
    INNGEST_EVENT_KEY:process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNIN_KEY:process.env.INNGEST_SIGNIN_KEY,
}