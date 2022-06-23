import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Articulo } from "../../Model/Articulo";

class NewArticulo extends React.Component {
	constructor(props) {
		super();
		// this.props = props;
		// this.Articulo = new Articulo();
		// this.Detalle = this.props.route.params.Detalle;
		//this.GuardarArticulo = this.props.route.params.GuardarArticulo;
		// this.cargarContenidos = this.props.route.params.cargarContenidos;
		this.props = props;
		this.ArticuloG = new Articulo();
		this.state = {
			Articulos: [],
		};
		this.CargarArticulo = this.props.route.params.CargarArticulo;
	}

	GuardarArticulo = async () => {
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
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Fecha Registro :"
					onChangeText={(val) => (this.ArticuloG.Fecha_Registro = val)}
				></TextInput>
				{/* <TextInput
					style={styles.InputStyle}
					placeholder="Fecha Registro:"
					onChangeText={(val) => (this.Articulo.Fecha_Registro = val)}
				></TextInput> */}

				{/* OPCIONES */}
				<Button
					title=" Guardar "
					color="#0466C8"
					onPress={async () => {
						await this.GuardarArticulo();
						this.props.navigation.navigate("ArticuloView");
						//this.props.navigation.navigate("DetalleCursoView");
					}}
				></Button>
				<Button
					title=" Cancelar "
					color="#0466C8"
					onPress={async () => {
						// await this.GuardarArticulo();
						//this.props.navigation.navigate("ArticuloView");
						//this.props.navigation.navigate("DetalleCursoView");
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
