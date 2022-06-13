class Detalle_Compra {
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
		for (const prop in detalle) {
			this[prop] = detalle[prop];
		}
	}
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
