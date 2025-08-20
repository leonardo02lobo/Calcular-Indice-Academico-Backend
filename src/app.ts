import express from "express"
import cors from 'cors'
import usuarioRouter from './routes/usuario.routes'
import materiasRouter from './routes/materias.routes'
import notasRouter from './routes/notas.routes'

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/usuario",usuarioRouter)
app.use("/api/materias", materiasRouter)
app.use("/api/notas", notasRouter)

app.listen(3000,() =>{
    console.log(`http://127.0.0.1:3000`)
})
