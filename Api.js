import express from "express";
import cors from 'cors';

import { Routes } from "./routes/rutasHoteles.js";
import { establecerConexionDB } from "./database/conexion.js";
export class Api {
  constructor() {
    this.app = express();
    this.ConectarDB()
    this.processPetition()
    this.port = 3000;
  }
WakeServer() {
    this.app.listen(process.env.PORT, () => {
      console.log("on");
    });
}
processPetition(){
    this.app.use(cors())
    this.app.use(express.json())  
    this.app.use("/",Routes)
    
}
ConectarDB(){
  establecerConexionDB()
}

}
