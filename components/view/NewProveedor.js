import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Proveedor } from "../../Model/Proveedor";

class NewProveedor extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.BloqueProv = new Proveedor();
	}

	render() {  
		return (
			<View style={{ padding: 10 }}>
				<Text style={styles.Title}>Nuevo Proveedor </Text>
				<TextInput
					style={styles.InputStyle}
					placeholder="Nombre Proveedor"
					onChangeText={(val) => (this.BloqueProv.Nombre_proveedor = val)}
				></TextInput>
                
				<Button
					title=" Guardar "
					color={"#008000"}
					onPress={async () => {
						await this.props.route.params.GuardarBloque(this.BloqueProv);
					}}
				></Button>
				<Button
					title=" Cancelar "
					color={"#008000"}
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