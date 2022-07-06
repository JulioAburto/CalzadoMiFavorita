import React from "react";
import { StyleSheet, Text, Button, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Proveedor } from "../../Model/Proveedor";
import { CardProveedorComp } from "../utility/CardProveedorComp";
class ProveedorView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
			seleccion: this.props.route.params ?? false,
		};
		this.Proveedor = new Proveedor();
		this.CargarProveedores();
	}
	CargarProveedores = async (param = "") => {
		const Proveedores = await this.Proveedor.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Proveedores,
		});
	};

	// GuardarProveedor = async (Bloquep = new Proveedor()) => {
	// 	await Bloquep.Save("Id_Proveedor");

	// 	this.props.navigation.navigate("ProveedorView");
	// };
	SeleccionProveedor = async (pk, name) => {
		await this.props.route.params.SeleccionProveedor(pk, name);
		this.props.navigation.navigate("NewGuardarCompra");
	};

	render() {
		return (
			<ScrollView>
				<Text style={styles.Title}>Detalle de Proveedores</Text>
				<Button
					title="Nuevo Proveedor"
					color="#0466C8"
					onPress={() =>
						this.props.navigation.navigate("NewProveedor", {
							CargarProveedores: this.CargarProveedores,
						})
					}
				></Button>
				<TextInput
					style={{ padding: 10, margin: 10, borderWidth: 1, borderRadius: 3 }}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarProveedores(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((proveedor) => (
						<CardProveedorComp
							key={proveedor.Id_Proveedor}
							SeleccionProveedor={this.SeleccionProveedor}
							data={proveedor}
						/>
					))
				)}
			</ScrollView>
		);
	}
}

export { ProveedorView };
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
