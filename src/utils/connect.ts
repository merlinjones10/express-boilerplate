import mongoose from 'mongoose'
import config from 'config'

async function connect() {
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri)
        console.log('DB connected')
    } catch (e) {
        console.warn('Err connecting to DB', e)
        process.exit(1)
    }
}

export default connect
