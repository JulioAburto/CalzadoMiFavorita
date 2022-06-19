import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class CompraContenido extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
		};
		//this.Compra_Articulo = this.props.Compra_Articulo ?? new Compra_Articulo();
		this.Detalle_Compra = this.props.Detalle_Compra ?? new Detalle_Compra();
		//this.cargarContenido();
	}

	// cargarContenido = async () => {
	// 	const Detalles = await this.Compra_Articulo.Detalle_Compra.get();
	// 	this.setState({
	// 		isLoading: false,
	// 		Detalles: Detalles,
	// 	});
	// };

	render() {
		return (
			<View style={styles.CardStyle}>
				<Text style={styles.Title}>Contenido Detalle de la Compra</Text>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((p) => {
						return (
							<View>	<Text style={styles.Atribute}>Atributos desde CompraContenido</Text>
								<Text style={styles.Atribute}>Id Compra:{p.Id_Compra}</Text>
								<Text style={styles.Atribute}>Id Articulo:{p.Id_Articulo}</Text>
								<Text style={styles.Atribute}>Cantidad:{p.Cantidad}</Text>
								<Text style={styles.Atribute}>Precio Unitario Compra{p.Precio_UnitarioCompra}</Text>
								<Text style={styles.Atribute}> Precio Unitario Venta:{p.Precio_UnitarioVenta}</Text>
								<Text style={styles.Atribute}>Fecha:{p.Fecha}</Text>
								<Text style={styles.Atribute}>Total Costo:{p.Total_Costo}</Text>
							</View>
						);
					})
				)}
			</View>
		);
	}
}
export { CompraContenido };

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
