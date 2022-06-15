import { Entity } from "./core/Entity";
class Proveedor extends Entity {
	constructor(
		proveedor = {
			Id_Proveedor: "",
			Nombre_proveedor: "",
			Dirección: "",
			Teléfono: "",
			Correo: "",
		}
	) {
		super();
		for (const prop in proveedor) {
			this[prop] = proveedor[prop];
		}
	}
	ApiMethods = {
		Get: "Proveedor",
	};
	Id_Proveedor = "";
	Nombre_proveedor = "";
	Dirección = "";
	Teléfono = "";
	Correo = "";
}
export { Proveedor };