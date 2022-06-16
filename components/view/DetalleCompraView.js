import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class DetalleCompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			Dataset: this.props.route.params.Dataset ?? [],
			Compra: this.props.route.params.Curso,
		};
	}
	render() {
		return (
			<ScrollView>
				<Text>Detalle</Text>
				<Button
					title="<- Regresar"
					color={"#008000"}
					onPress={() => this.props.navigation.navigate("CompraView")}
				></Button>
				{this.state.Dataset.map((p) => {
					return (
						<View>
							<Text>{p.Id_DetalleCompra}</Text>
							<CompraContenido Compra={this.state.Compra} Detalle_Compra={p}></CompraContenido>
						</View>
					);
				})}
			</ScrollView>
		);
	}
}
export { DetalleCompraView };
