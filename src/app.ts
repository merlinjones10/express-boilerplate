import express from 'express'
import config from 'config'
import connect from './utils/connect'
import routes from './routes'

require('dotenv').config()

const port = config.get<number>('port')
const app = express()

app.use(express.json())

app.listen(port, async () => {
    console.log(`App listening on ${port}`)
    await connect(process.env.CONNECTION_STRING!)
    routes(app)
})
