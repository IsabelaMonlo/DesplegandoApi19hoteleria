import { modeloHabitacion } from "../models/modeloHabitacion.js";
export class ServicioHabitacion {
  constructor() {}
  async modificar(id, data) {
    let actualizarHabitacion=await modeloHabitacion.findByIdAndUpdate(id, data);
    return actualizarHabitacion.save()
  }
  async buscar() {
    let buscarHabitaciones = await modeloHabitacion.find();
    return buscarHabitaciones;
  }
  async buscarEspecifico(id) {
    let buscarHabitacion = await modeloHabitacion.findById(id);
    return buscarHabitacion;
  }
  async registrar(data) {
    let nuevaHabitacion = new modeloHabitacion(data);
    return await nuevaHabitacion.save();
  }
  async eliminar(id) {
    let eliminarHabitacion = await modeloHabitacion.findByIdAndDelete(id);
    return eliminarHabitacion;
  }
}
