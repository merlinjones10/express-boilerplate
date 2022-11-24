import mongoose from 'mongoose'
import config from 'config'
require('dotenv').config()

async function connect(connString: string) {
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(connString)
        console.log('DB connected')
    } catch (e) {
        console.warn('Err connecting to DB', e)
        process.exit(1)
    }
}

export default connect
