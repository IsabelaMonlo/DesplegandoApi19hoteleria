import mongoose from "mongoose";
export async function establecerConexionDB(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("exito en la conexion")
    } catch (error) {
        console.error(error)
    }
}