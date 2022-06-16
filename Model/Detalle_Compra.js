import { Entity } from "./core/Entity";
class Detalle_Compra extends Entity {
	constructor(
		detalle = {
			Id_DetalleCompra: "",
			Id_Compra: "",
			Id_Articulo: "",
			Cantidad: "",
			Precio_UnitarioCompra: "",
			Precio_UnitarioVenta: "",
			Fecha: "",
			Total_Costo: "",
		}
	) {
		super();
		for (const prop in detalle) {
			this[prop] = detalle[prop];
		}
	}
	ApiMethods = {
		Get: "Detalle_Compra",
	};
	Id_DetalleCompra = "";
	Id_Compra = "";
	Id_Articulo = "";
	Cantidad = "";
	Precio_UnitarioCompra = "";
	Precio_UnitarioVenta = "";
	Fecha = "";
	Total_Costo = "";
}
export { Detalle_Compra };
