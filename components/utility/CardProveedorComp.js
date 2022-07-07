import { StyleSheet, Button, Text, View } from "react-native";

const CardProveedorComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Proveedores</Text>
			<Text style={styles.Atribute}>Nombre del Proveedor: {props.data.Nombre_proveedor} </Text>
			<Text style={styles.Atribute}>Dirección: {props.data.Dirección} </Text>
			<Text style={styles.Atribute}>Teléfono: {props.data.Teléfono} </Text>
			<Text style={styles.Atribute}>Correo: {props.data.Correo} </Text>
			<Button
				title="✓"
				color="#0466C8"
				onPress={() => {
					props.SeleccionProveedor(props.data.Id_Proveedor, props.data.Nombre_proveedor);
				}}
			></Button>
		</View>
	);
};

export { CardProveedorComp };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#33415C",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 25,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 16,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
	},
});
