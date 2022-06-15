import { Entity } from "./core/Entity";

class Compra_Articulo extends Entity {
	constructor(
		compra = {
			Id_Compra: "",
			Id_Usuario: "",
			Id_Proveedor: "",
			Fecha_Compra: "",
			Total_Costo: "",
		}
	) {
		super();
		for (const prop in compra) {
			this[prop] = compra[prop];
		}
	}
	Id_Compra = "";
	Id_Usuario = "";
	Id_Proveedor = "";
	Fecha_Compra = "";
	Total_Costo = "";
}
export { Compra_Articulo };
