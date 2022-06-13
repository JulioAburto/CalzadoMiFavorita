class Material {
  constructor(
    material = {
      Id_Material: "",
      NombreMaterial: "",
      Fecha_Registro: "",
    }
  ) {
    for (const prop in material) {
      this[prop] = material[prop];
    }
  }
  Id_Material = "";
  NombreMaterial = "";
  Fecha_Registro = "";
}
export { Material };
