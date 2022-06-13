class Compra_Articulo {
	constructor(
		compra = {
			Id_Compra: "",
			Id_Usuario: "",
			Id_Proveedor: "",
			Fecha_Compra: "",
			Total_Costo: "",
		}
	) {
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
