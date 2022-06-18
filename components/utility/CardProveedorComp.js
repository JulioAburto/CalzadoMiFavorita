import { StyleSheet, Button, Text, View } from "react-native";

const CardProveedorComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Proveedores</Text>
			{/* <Text style={styles.Atribute}>Id: {props.data.IdCurso} </Text> */}
			<Text style={styles.Atribute}>Nombre del Proveedor: {props.data.Nombre_proveedor} </Text>
			{/* <Text style={styles.Resumen}>Resumen: {props.data.ResumenCurso} </Text> */}
			<Text style={styles.Atribute}>Dirección: {props.data.Dirección} </Text>
			<Text style={styles.Atribute}>Teléfono: {props.data.Teléfono} </Text>
			<Text style={styles.Atribute}>Correo: {props.data.Correo} </Text>

			{/* <Button
				title="Ver Detalle de Proveedores"
				color="#0466C8"
				onPress={() => {
					//props.cargarBloques(props.data);
				}}
			></Button> */}
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