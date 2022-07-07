import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Articulo } from "../../Model/Articulo";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class NewArticulo extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.ArticuloG = new Articulo();

		this.state = {
			// Articulos: [],
			fechaActual: Date().toString(),
		};
		this.CargarArticulo = this.props.route.params.CargarArticulo;
	}
	/* espera que se carguen o guarden todo los articulos por medio del IdArticulo */
	GuardarArticulo = async () => {
		this.ArticuloG.Fecha_Registro = this.state.fechaActual;
		await this.ArticuloG.Save("Id_Articulo");
		this.CargarArticulo();
	};

	render() {
		return (
			<View style={{ padding: 10 }}>
				<Text style={styles.Title}>Nuevo Articulo</Text>
				{/* FORMULARIOS */}
				<TextInput
					style={styles.InputStyle}
					placeholder="Nombre"
					onChangeText={(val) => (this.ArticuloG.Nombre_Articulo = val)}
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Descripcion:"
					onChangeText={(val) => (this.ArticuloG.Descripcion_Articulo = val)}
					numberOfLines={4}
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Fecha Registro :"
					value={this.state.fechaActual}
				></TextInput>

				{/* OPCIONES */}
				<Button
					title=" Guardar "
					color="#0466C8"
					onPress={async () => {
						await this.GuardarArticulo();
						this.props.navigation.navigate("CompraView");
					}}
				></Button>
				<Button
					title=" Cancelar "
					color="#F82F40"
					onPress={async () => {
						this.props.navigation.navigate("ArticuloView");
					}}
				></Button>
			</View>
		);
	}
}
export { NewArticulo };

const styles = StyleSheet.create({
	Title: {
		color: "#252422",
		fontSize: 25,
	},
	InputStyle: {
		padding: 10,
		margin: 10,
		borderWidth: 2,
		borderRadius: 3,
	},
});
