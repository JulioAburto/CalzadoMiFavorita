import { Entity } from "./core/Entity";
class Articulo extends Entity {
	constructor(articulo){
		super();
		for (const prop in articulo) {
			this[prop] = articulo[prop];
		}
	}
	ApiMethods = {
		Get: "Articulo",
	};
	Id_Articulo = "";
	Id_Categoria = "";
	Id_Modelo = "";
	Id_Marca = "";
	Código_Articulo = "";
	Nombre_Articulo = "";
	Descripcion_Articulo = "";
	Fecha_Registro = "";
	Estado = "";
}
export { Articulo };