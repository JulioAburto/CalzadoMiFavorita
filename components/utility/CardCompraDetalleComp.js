import { StyleSheet, Button, Text, View } from "react-native";

const CardCompraDetalleComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Atribute}>Id Detalle Compra{props.data.Id_DetalleCompra}</Text>
			<Text style={styles.Atribute}>Compra:{props.data.Id_Compra}</Text>
			<Text style={styles.Atribute}>Articulo:{props.data.Id_Articulo}</Text>
			<Text style={styles.Atribute}>Id DetalleCompra{props.data.Id_DetalleCompra}</Text>
			<Text style={styles.Atribute}>IdCantidad{props.data.Cantidad}</Text>
			<Text style={styles.Atribute}>Precio Unitario{props.data.Precio_UnitarioCompra}</Text>
			<Text style={styles.Atribute}>Precio Unitario Venta{props.data.Precio_UnitarioVenta}</Text>
			<Text style={styles.Atribute}>Fecha{props.data.Fecha}</Text>
			<Text style={styles.Atribute}>Total{props.data.Total_Costo}</Text>
		</View>
	);
};

export { CardCompraDetalleComp };

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
