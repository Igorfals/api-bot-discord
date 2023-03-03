import express from 'express'
import routes from './routes'
import cors from 'cors'
import swaggerJsdoc from 'swagger-jsdoc'
import { swaggerDefinition } from './utils/swagger'
import swaggerui from 'swagger-ui-express'

const app = express()
const port = 3000
const options = {
    swaggerDefinition,
    apis: ['./src/routes/group-route/**/*.ts']
}

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(routes)
app.use('/uploads', express.static('uploads'))

const sawggerSpec = swaggerJsdoc(options)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(sawggerSpec))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})