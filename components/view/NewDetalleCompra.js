import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class NewDetalleCompra extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.Detalle = new Detalle_Compra();
		//this.Bloque = this.props.route.params.Bloque;
	}

	render() {
		return (
			<View style={{ padding: 10 }}>
				<Text style={styles.Title}>Nuevo Detalle </Text>
				{/* FORMULARIOS */}
				<TextInput
					style={styles.InputStyle}
					placeholder="Cantidad"
					onChangeText={(val) => (this.Detalle.Cantidad = val)}
				></TextInput>
                <TextInput
					style={styles.InputStyle}
					placeholder="Precio Unitario Compra"
					onChangeText={(val) => (this.Detalle.Precio_UnitarioCompra = val)}
				></TextInput>
                <TextInput
					style={styles.InputStyle}
					placeholder="Precio Unitario Venta"
					onChangeText={(val) => (this.Detalle.Precio_UnitarioVenta = val)}
				></TextInput>
                <TextInput
					style={styles.InputStyle}
					placeholder="Fecha"
					onChangeText={(val) => (this.Detalle.Fecha = val)}
				></TextInput>
                <TextInput
					style={styles.InputStyle}
					placeholder="Total Costo"
					onChangeText={(val) => (this.Detalle.Total_Costo = val)}
				></TextInput>

				{/* OPCIONES */}
				<Button
					title=" Guardar "
					color={"#008000"}
					onPress={async () => {
						await this.props.route.params.GuardarDetalle(this.Detalle);
						//await this.props.route.params.cargarContenidos();
						//this.props.navigation.navigate("DetalleCursoView");
					}}
				></Button>
				<Button
					title=" Cancelar "
					color={"#008000"}
					onPress={
						() => {
							this.props.navigation.navigate("DetalleCompraView")
						}
							
					}
				></Button>
			</View>
		);
	}
}
export { NewDetalleCompra };

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
