import { modeloReservas } from "../models/modeloReservas.js"
export class ServicioReserva {
  constructor() {}

  async buscar() {
let reservaHabitaciones=await modeloReservas.find()
return reservaHabitaciones

  }
  async buscarEspecifico(id) {
let reservaHabitacion=await modeloReservas.findById(id)
return reservaHabitacion

  }
  async modificar(id,data) {
    let actualizarHabitacion=await modeloReservas.findByIdAndUpdate(id, data);
    return actualizarHabitacion.save()
  }
  async registrar(data) {
let registrarReserva=new modeloReservas(data)
return await registrarReserva.save()

  }
  async eliminar(id) {
    let eliminarReserva=await modeloReservas.findByIdAndDelete(id)
    return(eliminarReserva)
  }
}
