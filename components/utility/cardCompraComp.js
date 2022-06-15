import { StyleSheet, Button, Text, View } from "react-native";

const cardCompraComp = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>Factura Compra</Text>
			{/* <Text style={styles.Atribute}>Id: {props.data.IdCurso} </Text> */}
			<Text style={styles.Atribute}>Compra: {props.data.Id_Compra} </Text>
			{/* <Text style={styles.Resumen}>Resumen: {props.data.ResumenCurso} </Text> */}
			<Text style={styles.Atribute}>Usuario: {props.data.Id_Usuario} </Text>
			
		</View>
	);
};

export { cardCompraComp };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#212529",
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
