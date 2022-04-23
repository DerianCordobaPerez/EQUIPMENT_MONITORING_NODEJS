import './database'
import express from 'express'
import cors from 'cors'
import { join } from 'path'
import { engine } from 'handlebars'
import { PORT } from './config/env.config'

const app = express()

app.set('port', PORT)
app.set('views', join(__dirname, 'views'))
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')

app.use(cors())
app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

export default app