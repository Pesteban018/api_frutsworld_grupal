import  express  from 'express'
import productosRoutes from './routes/productos.routes.js'
<<<<<<< Updated upstream
import indexRoutes from './routes/index.routes.js';

const app = express()


app.use(indexRoutes)
app.use(productosRoutes)


app.listen(5000)
console.log("Server runnin on port 3000")
=======
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api', indexRoutes)
app.use('/api', productosRoutes)

app.use((req, res, next )=> { res.status(404).json({message: 'enspoint not found'})})

app.listen(5000)
console.log("Server runnin on port 5000")

>>>>>>> Stashed changes
