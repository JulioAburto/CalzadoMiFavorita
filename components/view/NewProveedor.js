import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Proveedor } from "../../Model/Proveedor";

class NewProveedor extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.ProveedorBlock = new Proveedor();
		this.state = {
			Proveedores: [],
		};
		this.CargarProveedores = this.props.route.params.CargarProveedores;
	}
	GuardarProveedor = async () => {
		await this.ProveedorBlock.Save("Id_Proveedor");
		this.CargarProveedores();
	};

	render() {
		return (
			<View style={{ padding: 10 }}>
				<Text style={styles.Title}>Nuevo Proveedor </Text>
				<TextInput
					style={styles.InputStyle}
					placeholder="Nombre Proveedor: "
					onChangeText={(val) => (this.ProveedorBlock.Nombre_proveedor = val)}
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Direccion: "
					onChangeText={(val) => (this.ProveedorBlock.Dirección = val)}
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Telefono: "
					onChangeText={(val) => (this.ProveedorBlock.Teléfono = val)}
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Correo: "
					onChangeText={(val) => (this.ProveedorBlock.Correo = val)}
				></TextInput>

				<Button
					title=" Guardar "
					color="#0466C8"
					onPress={async () => {
						await this.GuardarProveedor();
						this.props.navigation.navigate("CompraView");
					}}
				></Button>
				<Button
					title=" Cancelar "
					color="#0466C8"
					onPress={() => this.props.navigation.navigate("ProveedorView")}
				></Button>
			</View>
		);
	}
}
export { NewProveedor };

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
