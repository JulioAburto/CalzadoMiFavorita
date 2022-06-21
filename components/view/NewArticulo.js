import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Articulo } from "../../Model/Articulo";

class NewArticulo extends React.Component {
	constructor(props) {
		super();
        this.props = props;
        this.Articulo = new Articulo();
        this.Detalle =  this.props.route.params.Detalle;
		this.cargarContenidos = this.props.route.params.cargarContenidos
	}

	render() {
		return (
			<View style={{ padding: 10 }}>
				<Text style={styles.Title}>Nuevo Articulo</Text>
				{/* FORMULARIOS */}
				<TextInput
					style={styles.InputStyle}
					placeholder="Nombre"
					onChangeText={(val) => (this.Articulo.Nombre = val)}
				></TextInput>

				{/* OPCIONES */}
				<Button
					title=" Guardar "
					color={"#008000"}
					onPress={async () => {
						//await this.GuardarContenido(this.Bloque, this.Contenido);
						//await this.cargarContenidos();
						//this.props.navigation.navigate("DetalleCursoView");
					}}
				></Button>
				<Button
					title=" Cancelar "
					color={"#008000"}
					onPress={
						() => {}
						//	this.props.navigation.navigate("DetalleCursoView")
					}
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
