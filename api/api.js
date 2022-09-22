import express from "express"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"

const api = express()

// Todo: configurar Middlewares

api.use(express.json())
api.use(cors())

api.get("/status", (req, res) => {
    return res.json({
        msg: "API en linea y funcionando hola maicol"
    })
})

// to do => por hacer
// TODO: Aca se registran las rutas


api.use(productRoutes)


export default api