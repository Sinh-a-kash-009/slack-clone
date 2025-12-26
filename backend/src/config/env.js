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
    MONGO_URI:process.env.MONGO_URI
}