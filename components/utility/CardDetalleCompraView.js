import React from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
class CardDetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
			Articulo: [],
		};
		this.CargarProducto(this.props.data);
	}
	CargarProducto = async (e = new Detalle_Compra()) => {
		const list = await e.Articulo.get();
		const resultado = list.filter((i) => i.Id_Articulo == e.Id_Articulo);
		this.setState({
			Articulo: resultado,
		});
	};
	render() {
		return (
			<View>
				 {this.state.Articulo.map((c) => (
					<Text key={c.Id_Articulo}>Nombre de producto: {c.Nombre_Articulo}</Text>
				))}
				 <Text style={styles.Atribute}>Precio: {this.props.data.Precio_UnitarioCompra}</Text>
				<Text style={styles.Atribute}>Cantidad: {this.props.data.Cantidad}</Text>
				<Text style={styles.Atribute}>Total: {this.props.data.Total_Costo}</Text>

				<View>
					<Button onPress={() => {}}>
						<Text>Editar</Text>
					</Button>
					<Button onPress={() => {}}>
						<Text>Eliminar</Text>
					</Button>
				</View>
			</View>
		);
	}
}
export { CardDetalleCompraView };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#e9ecef",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	CardStyle1: {
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "row",
		backgroundColor: "#f8f9fa",
		padding: 10,
		margin: 5,
		borderRadius: 5,
	},
	Atribute: {
		color: "#252422",
		fontSize: 20,
	},
	InputStyle: {
		width: "45%",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
	InputStyleF: {
		backgroundColor: "#f8f9fa",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
});
