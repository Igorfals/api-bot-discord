import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})