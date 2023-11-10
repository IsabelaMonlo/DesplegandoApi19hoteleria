import express from 'express'
import { controllerHabitacion } from '../controllers/ControladorHabitacion.js'
import { controllerReservas } from '../controllers/ControladorReservas.js'
let controller=new controllerHabitacion()
let controllerR=new controllerReservas()
export const Routes=express.Router()
Routes.get("/obtener/habitaciones",controller.buscar)

Routes.put("/actualizar/habitacion/:id",controller.modificar)
Routes.delete("/eliminar/habitacion/:id",controller.eliminar)
Routes.post("/mandar/habitacion",controller.registrar)
Routes.get("/obtener/habitacion/:id",controller.buscarEspecifico)
//reservas
Routes.get("/obtener/reservas",controllerR.buscar)
Routes.put("/actualizar/reserva/:id",controllerR.modificar)
Routes.delete("/eliminar/reserva/:id",controllerR.eliminar)
Routes.post("/hacer/reserva",controllerR.registrar)
Routes.get("/obtener/reserva/:id",controllerR.buscarEspecifico)


