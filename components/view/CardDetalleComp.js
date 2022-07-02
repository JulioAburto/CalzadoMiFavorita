import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { CardDetalleCompra } from "../utility/CardDetalleCompra";

class CardDetalleComp extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			DetalleComp: this.props.route.params.DetalleComp,
			Dataset: this.props.route.params.Dataset ?? [],
			Articulo: this.props.route.params.Articulo ?? [],
		};
		this.CargarArticulo(this.data);
	}

	render() {
		return (
			<ScrollView style={styles.Container}>
				<Text style={styles.Title}> Bloques Vista </Text>
				<Flatbutton
					style={styles.Button}
					text="<- Regresar"
					onPress={() => this.props.navigation.navigate("BottomTab")}
				/>
				{this.state.Dataset.map((detalle) => {
					return (
						<ScrollView style={styles.Container1}>
							<CardDetalleCompra key={detalle.Id_DetalleCompra} data={detalle} />
						</ScrollView>
					);
				})}
			</ScrollView>
		);
	}

	CargarProducto = async (e = new Detalle_Compra()) => {
		const list = await e.Articulo.get();
		const resultado = list.filter((i) => i.Id_Articulo == e.Id_Articulo);
		this.setState({
			Articulo: resultado,
		});
	};
}
export { CardDetalleComp };

const styles = StyleSheet.create({
	Title: {
		color: "#fff",
		fontSize: 26,
		backgroundColor: "#212529",
	},
	Container: {
		backgroundColor: "#536878",
	},
	Container1: {
		backgroundColor: "#536878",
		marginTop: 40,
	},
});
