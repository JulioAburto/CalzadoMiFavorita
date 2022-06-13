class Marca {
	constructor(
		marca = {
			Id_Marca: "",
			Nombre_Marca: "",
			Fecha_Resgistro: "",
		}
	) {
		for (const prop in marca) {
			this[prop] = marca[prop];
		}
	}
	Id_Marca = "";
	Nombre_Marca = "";
	Fecha_Resgistro = "";
}
export { Marca };
