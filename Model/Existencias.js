import { Entity } from "./core/Entity";
class Existencias extends Entity {
	constructor(
		existencias = {
			Id_ProductoTienda: "",
			Id_Color: "",
			Id_Talla: "",
			Id_Material: "",
			Id_Articulo: "",
			Precio_UnidadVenta: "",
			Precio_UnidadCompra: "",
			Stock: "",
            Estado: "",
		}
	) {
		super();
		for (const prop in existencias) {
			this[prop] = existencias[prop];
		}
	}
	ApiMethods = {
		Get: "Existencias",
	};
	Id_ProductoTienda = "";
	Id_Color = "";
	Id_Talla = "";
	Id_Material = "";
	Id_Articulo = "";
	Precio_UnidadVenta = "";
	Precio_UnidadCompra = "";
	Stock = "";
    Estado = "";
}
export { Existencias };