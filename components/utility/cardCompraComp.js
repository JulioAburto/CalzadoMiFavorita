import { StyleSheet, Button, Text, View } from "react-native";

const CardCompraComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Factura Compra</Text>
			{/* <Text style={styles.Atribute}>Id: {props.data.IdCurso} </Text> */}
			<Text style={styles.Atribute}>Compra: {props.data.Id_Compra} </Text>
			{/* <Text style={styles.Resumen}>Resumen: {props.data.ResumenCurso} </Text> */}
			<Text style={styles.Atribute}>Usuario: {props.data.Id_Usuario} </Text>
			<Text style={styles.Atribute}>Proveedor: {props.data.Id_Proveedor} </Text>
			<Text style={styles.Atribute}>Fecha de Compra: {props.data.Fecha_Compra} </Text>
			<Text style={styles.Atribute}>Costo Total: C${props.data.Total_Costo} </Text>

			<Button
				title="Ver Detalle de Compra"
				color="#0466C8"
				onPress={() => {
					props.CargarDetalleCompra(props.data);
				}}
			></Button>
		</View>
	);
};

export { CardCompraComp };

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
