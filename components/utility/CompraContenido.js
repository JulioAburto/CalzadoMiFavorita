import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
class CompraContenido extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Detalle: [],
		};
		this.Detalle_Compra = this.props.Detalle_Compra ?? new Detalle_Compra();
	}
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