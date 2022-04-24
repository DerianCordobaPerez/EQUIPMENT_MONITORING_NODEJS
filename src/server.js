import './config/dotenv.config'
import './database'
import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import flash from 'connect-flash'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import Handlebars from 'handlebars'
import { join } from 'path'
import methodOverride from 'method-override'
import { PORT, MONGODB_URL, SECRET_SESSION } from './config/env.config'
import homeRoutes from './routes/home.routes'
import computerRoutes from './routes/computer.routes'

const app = express()

app.set('port', PORT)
app.set('views', join(__dirname, 'views'))
app.engine(
  '.hbs',
  engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
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
app.use(methodOverride('_method'))
app.use(flash())
app.use(
  session({
    secret: SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: MONGODB_URL }),
  })
)

app.use((req, res, next) => {
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  next()
})

app.use(homeRoutes)
app.use('/computers', computerRoutes)

app.use((req, res) => res.render('404'))

export default app