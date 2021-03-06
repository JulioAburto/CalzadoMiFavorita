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
		this.EliminarDetalleC = this.props.EliminarDetalleC;
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
			<View style={styles.CardStyle}>
				{this.state.Articulo.map((c) => (
					<Text style={styles.Atribute} key={c.Id_Articulo}>
						Nombre de producto: {c.Nombre_Articulo}
					</Text>
				))}
				<Text style={styles.Atribute}>P/U Compra: {this.props.data.Precio_UnitarioCompra}</Text>
				<Text style={styles.Atribute}>P/U Venta: {this.props.data.Precio_UnitarioVenta}</Text>
				<Text style={styles.Atribute}>Cantidad: {this.props.data.Cantidad}</Text>
				<Text style={styles.Atribute}>Total Costo: {this.props.data.Total_Costo}</Text>
				<Button
				title=" Eliminar "
				color="#d00000"
					onPress={() => {
						this.EliminarDetalleC(this.props.data);
					}}
				></Button>
			</View>
		);
	}
}
export { CardDetalleCompraView };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#33415C",
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "column",
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
		flex: 1,
		alignSelf: "stretch",
		color: "#e9ecef",
		fontSize: 13,
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
