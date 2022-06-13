class Color {
  constructor(
    color = {
      Id_Color: "",
      NombreColor: "",
      Fecha_Registro: "",
    }
  ) {
    for (const prop in color) {
      this[prop] = color[prop];
    }
  }
  Id_Color = "";
  NombreColor = "";
  Fecha_Registro = "";
}
export { Color };
