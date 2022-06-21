import { Entity } from "./core/Entity";
import { Articulo } from "./Articulo";
class Detalle_Compra extends Entity {
	constructor(detalle) {
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
				const Articulos = new Articulo();
				return await Articulos.GetByProps("Id_Articulo", this.Id_Articulo);
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
