import { StyleSheet, Button, Text, View } from "react-native";

const CardArticuloComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Articulo</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.Nombre_Articulo} </Text>
			<Text style={styles.Atribute}>Descripcion Articulo {props.data.Descripcion_Articulo} </Text>
			<Text style={styles.Atribute}>Fecha Registro: {props.data.Fecha_Registro} </Text>
			<Button
			color="#0466C8"
				onPress={() => {
					props.seleccion
						? props.SeleccionArticulo(props.data.Id_Articulo, props.data.Nombre_Articulo)
						: false;
				}}
				title="✓"
			></Button>
		</View>
	);
};

export { CardArticuloComp };

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
