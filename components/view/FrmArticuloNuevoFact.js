import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
class FrmArticuloNuevoFact extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.DetalleCompra = new Detalle_Compra();
		this.state = {
			LLP: "",
			articulo: "",
		
			//Dataset: this.props.route.params.Dataset ?? [],
		};
		//this.NombreArticulo = "";
		this.GuardarDetalleCompra = this.props.route.params.GuardarDetalleCompra;
		this.ban = true;
	}
	SeleccionArticulo = async (llp, Nombre) => {
		this.setState({
			LLP: llp,
			articulo: Nombre,
		});
		this.DetalleCompra.Id_Articulo = llp.toString();
	};
	render() {
		return (
			<ScrollView style={styles.CardStyle}>
				<Text style={styles.Title}>Detalle Compra</Text>
				<View style={styles.CardStyle1}>
					<TextInput
						style={styles.InputStyle}
						placeholder="Articulo"
						value={this.state.articulo}
					></TextInput>
					<TextInput style={styles.InputStyle} placeholder="ID" value={this.state.LLP}></TextInput>
					<Button
						color="#0466C8"
						title="+"
						onPress={async () => {
							this.props.navigation.navigate("ArticuloView", {
								SeleccionArticulo: this.SeleccionArticulo,
								seleccion: true,
							});
						}}
					></Button>
				</View>
				<View style={styles.CardStyle1}>
					<Text>Precio</Text>
					<TextInput style={styles.InputStyle} placeholder="C$: 00.00"></TextInput>
				</View>
				<View style={styles.CardStyle1}>
					<Text>Cantidad</Text>
					<TextInput style={styles.InputStyle} placeholder="00"></TextInput>
				</View>
				<View style={styles.CardStyle1}>
					<Text>Subtotal: </Text>
					<TextInput style={styles.InputStyle} placeholder="00"></TextInput>
				</View>
				{/** OPCIONES */}
				<View style={styles.CardStyle1}>
					<Button
						title="Agregar Producto a Detalle"
						onPress={async () => {
							this.GuardarDetalleCompra(this.DetalleCompra, this.state.LLP, this.ban);
						}}
					></Button>
					<Button
						title="Cancelar"
						onPress={async () => {
						this.props.navigation.navigate("ArticulosView")
						}}
					></Button>
				</View>
			</ScrollView>
		);
	}
}
export { FrmArticuloNuevoFact };
const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#e9ecef",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	CardStyle1: {
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "row",
		backgroundColor: "#f8f9fa",
		padding: 10,
		margin: 5,
		borderRadius: 5,
	},
	Title: {
		color: "#252422",
		fontSize: 20,
	},
	InputStyle: {
		width: "45%",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
	InputStyleF: {
		backgroundColor: "#f8f9fa",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
});
