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
	render() {
		return (
			<ScrollView>
				<Text>Detalle de Proveedores</Text>
				<Button
					title="Nuevo Proveedor"
					onPress={() => this.props.navigation.navigate(this.CargarProveedores)}
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
						<CardProveedorComp key={proveedor.Id_Proveedor} data={proveedor} />
					))
				)}
			</ScrollView>
		);
	}
}

export { ProveedorView };
