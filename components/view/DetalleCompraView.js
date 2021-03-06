import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button } from "react-native";
import { CardCompraDetalleComp } from "../utility/CardCompraDetalleComp";
import { CompraContenido } from "../utility/CompraContenido";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
import { Articulo } from "../../Model/Articulo";

class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			Detalle: this.props.route.params.Detalle,
			Dataset: this.props.route.params.Dataset ?? [],
			Articulo: this.props.route.params.Articulo ?? [],
		};
	}
	NuevoContenido = async (Detalle, cargarContenidos) => {
		this.props.navigation.navigate("NewArticulo", {
			Detalle: Detalle,
			cargarContenidos: cargarContenidos,
			GuardarArticulo: this.GuardarArticulo,
		});
	};

	render() {
		return (
			<ScrollView>
				<Button
					title=" ← Regresar"
					color="#0466C8"
					onPress={() => this.props.navigation.navigate("CompraView")}
				></Button>

				{this.state.Dataset.map((p) => {
					return (
						<View style={styles.CardStyles} key={p.Id_DetalleCompra}>
							<Text style={styles.TitleP}>Detalle de Factura Compra</Text>
							<View style={styles.CardStyles1}>
								<Text style={styles.Atribute}>Cantidad:{p.Cantidad}</Text>
								<Text style={styles.Atribute}>P/U Compra: C${p.Precio_UnitarioCompra}</Text>
							</View>
							<View style={styles.CardStyles1}>
								<Text style={styles.Atribute}>P/U Venta: C${p.Precio_UnitarioVenta}</Text>
								<Text style={styles.Atribute}>Total Costo: C${p.Total_Costo}</Text>
							</View>

							<CompraContenido
								key={p.Id_DetalleCompra}
								Compra={this.state.Compra}
								NuevoContenido={this.NuevoContenido}
								Detalle_Compra={p}
							></CompraContenido>
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
		flex: 1,
		backgroundColor: "#001845",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	CardStyles1: {
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "row",
		backgroundColor: "#001845",
		padding: 0,
		margin: 0,
		borderRadius: 10,
		// borderWidth: 1,
		// borderColor: "#001233",
		// padding: 5,
		// margin: 5,
	},
	TitleP: {
		color: "#f8f9fa",
		fontSize: 20,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 20,
	},
	Atribute: {
		flex: 1,
		alignSelf: "stretch",
		color: "#e9ecef",
		fontSize: 14,
		borderWidth: 2.5,
		borderColor: "#33415C",
		padding: 5,
		height: 50,
	},
});
