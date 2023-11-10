import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
export class controllerHabitacion {
  constructor() {}
  async modificar (request, response) {
    let id = request.params.id;
    try {
          let data = new ServicioHabitacion;
          let datosUpdate=request.body
          let datos=await data.modificar(id,datosUpdate)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacionactualizada",
        datos:datosUpdate,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }

  async buscar(request, response) {
    try {
      let data = new ServicioHabitacion();
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitaciones buscadas",
        datos: await data.buscar(),
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async buscarEspecifico(request, response) {
    let id = request.params.id;
    try {
      let data = new ServicioHabitacion();
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacion buscada",
        datos: await data.buscarEspecifico(id),
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async registrar(request, response) {

    try {
      let data = new ServicioHabitacion();
      let datos = request.body;
      await data.registrar(datos)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacion creada",
        datos:datos,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    let id = request.params.id;
    try {
      let data = new ServicioHabitacion();
      await data.eliminar(id,data)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa habitacion eliminada",
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
}
  