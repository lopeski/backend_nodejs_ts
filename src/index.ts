import express from "express";
import cors from "cors";
import rout from './route';

const app = express();
const port = 9090;
console.log("Iniciando servidor na porta ", port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rout)

app.listen(port)
