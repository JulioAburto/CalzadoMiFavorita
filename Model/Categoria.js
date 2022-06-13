class Categoria {
  constructor(
    categoria = {
      Id_Categoria: "",
      Nombre_Categoría: "",
      Descripcion_Categoria: "",
    }
  ) {
    for (const prop in categoria) {
      this[prop] = categoria[prop];
    }
  }
  Id_Categoria = "";
  Nombre_Categoría = "";
  Descripcion_Categoria = "";
}
export { Categoria };
