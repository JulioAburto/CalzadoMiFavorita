import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";

class CompraContenido extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Detalle: [],
		};
		this.Compra_Articulo = this.props.Compra_Articulo ?? new Compra_Articulo();
		this.cargarContenido();
	}

	cargarContenido = async () => {
		const Detalles = await this.Compra_Articulo.Detalle_Compra.get();
		this.setState({
			isLoading: false,
			Detalles: Detalles,
		});
	};

	render() {
		return (
			<View>
				<Text>Conte</Text>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Detalle.map((p) => {
						return (
							<View>
								<Text style={styles.Atribute}>{p.Id_DetalleCompra}</Text>
							</View>
						);
					})
				)}
			</View>
		);
	}
}
export{CompraContenido}