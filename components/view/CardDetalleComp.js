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

	CargarArticulo = async (e = new TblDetalleCompra()) => {
		const list = await e.TblArticulos.get();
		const result = list.filter((i) => i.idarticulo == e.idarticulo);

		this.setState({
			Dataset: result,
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
