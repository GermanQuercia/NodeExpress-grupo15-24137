import express from 'express';
import bodyParser from "body-parser"
import rutas from "./routes/rutas.js"
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express()
const port = process.env.PORT || 3000

const corsOptions = {
  origin: 'https://nodeexpress-grupo15-24137.onrender.com',  // Permitir solo este dominio
  optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11, varios SmartTVs) requieren 204
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));// Middleware para parsear datos URL-encoded
app.use(bodyParser.json());// Middleware para parsear datos JSON
app.use(cookieParser());

app.use("/", rutas);

app.listen(port, () => {
    console.log(`Servidor escuchando el puerto ${port}`)
})
