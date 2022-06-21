import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button } from "react-native";
import { CardCompraDetalleComp } from "../utility/CardCompraDetalleComp";
import { CompraContenido } from "../utility/CompraContenido";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			Dataset: this.props.route.params.Dataset ?? [],
			Compra: this.props.route.params.Compra,
		};
	}
	// GuardarDetalle = async (Detalle = new Detalle_Compra()) => {
	// 	Detalle.Id_Compra = this.state.Compra.Id_Compra;
	// 	await Detalle.Save("Id_DetalleCompra");
	// 	const Detalles = await this.state.Compra.Detalle_Compra.get();
	// 	this.setState({ Dataset: Detalles });
	// 	this.props.navigation.navigate("DetalleCompraView");
	// };
	render() {
		return (
			<ScrollView>
				<Text style={styles.Title}>Detalle</Text>
				<Button
					title="<- Regresar"
					color="#0466C8"
					onPress={() => this.props.navigation.navigate("CompraView")}
				></Button>

				{this.state.Dataset.map((p) => {
					return (
						<View style={styles.CardStyles} key={p.Id_DetalleCompra}>
							<Text style={styles.Atribute}>Identificador compra: {p.Id_Compra}</Text>
							<Text style={styles.Atribute}>Id Detalle Compra: {p.Id_DetalleCompra}</Text>
							<Text style={styles.Atribute}>Id Compra: {p.Id_Compra}</Text>
							<Text style={styles.Atribute}>Id Articulo: {p.Id_Articulo}</Text>
							<Text style={styles.Atribute}>Cantidad: {p.Cantidad}</Text>
							<Text style={styles.Atribute}>Precio Unitario Compra: {p.Precio_UnitarioCompra}</Text>
							<Text style={styles.Atribute}>Precio Unitario Venta: {p.Precio_UnitarioVenta}</Text>
							<Text style={styles.Atribute}>Fecha: {p.Fecha}</Text>
							<Text style={styles.Atribute}>Total Costo: {p.Total_Costo}</Text>
							{/* <CompraContenido
								Compra={this.state.Compra}
								// GuardarDetalle={this.GuardarDetalle}
								Detalle_Compra={p}
							></CompraContenido> */}
						</View>
					);
				})}
			</ScrollView>
		);
	}
}
export { DetalleCompraView };

const styles = StyleSheet.create({
	CardStyles: {
		flex: 4,
		backgroundColor: "#001845",
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
});
