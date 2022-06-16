import { Entity } from "./core/Entity";
import { Detalle_Compra } from "./Detalle_Compra";
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
	ApiMethods = {
		Get: "Compra_Articulo",
	};
	Id_Compra = "";
	Id_Usuario = "";
	Id_Proveedor = "";
	Fecha_Compra = "";
	Total_Costo = "";
	Detalle_Compra = {
		val: [],
		get: async () => {
			if (this.Id_Compra != "") {
				const Detalle = new Detalle_Compra();
				return await Detalle.GetByProps("Id_Compra", this.Id_Compra);
			} else {
				return this.Detalle_Compra.val;
			}
		},
		set: (newValue) => {
			this.val = newValue;
		},
	};
}
export { Compra_Articulo };
