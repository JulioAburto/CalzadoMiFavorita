import { StyleSheet, Button, Text, View } from "react-native";

const CardCompraComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Factura Compra</Text>
			<View style={styles.CardStyles1}>
				<Text style={styles.Atribute}>Codigo Compra: {props.data.Id_Compra} </Text>
				<Text style={styles.Atribute}>Codigo Usuario: {props.data.Id_Usuario} </Text>
				<Text style={styles.Atribute}>Codigo Proveedor: {props.data.Id_Proveedor} </Text>
			</View>
			<View style={styles.CardStyles1}>
				<Text style={styles.Atribute}>Fecha: {props.data.Fecha_Compra} </Text>
				<Text style={styles.Atribute}>Costo Total: C${props.data.Total_Costo} </Text>
			</View>
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
	CardStyles1: {
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "row",
		backgroundColor: "#33415C",
		padding: 0,
		margin: 0,
		borderRadius: 10,
		// borderWidth: 1,
		// borderColor: "#001233",
		// padding: 5,
		// margin: 5,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 25,
	},
	Atribute: {
		flex: 1,
		alignSelf: "stretch",
		color: "#e9ecef",
		fontSize: 14,
		borderWidth: 2.5,
		borderColor: "#5C677D",
		padding: 5,
		height: 50,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
	},
});
