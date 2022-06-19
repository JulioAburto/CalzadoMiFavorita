import { Entity } from "./core/Entity";
import { Articulo } from "./Articulo";
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
	Articulo = {
		val: [],
		get: async () => {
			if (this.Id_DetalleCompra != "") {
				const Detalle = new Articulo();
				return await Detalle.GetByProps("Id_DetalleCompra", this.Id_DetalleCompra);
			} else {
				return this.Articulo.val;
			}
		},
		set: (newValue) => {
			this.val = newValue;
		},
	};
}
export { Detalle_Compra };
