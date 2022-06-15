import React from "react";
import { StyleSheet, Text, Button, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { cardCompraComp } from "../utility/cardCompraComp";
class CompraView extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isLoading: true,
			Dataset: [],
		};
		this.Compra = new Compra_Articulo();
	}
	CargarCompra = async (param = "") => {
		const Compras = await this.Compra.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Compras,
		});
	};
	render() {
		return (
			<ScrollView>
				<Text>Facturas de las compras</Text>
                {this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((curso) => (
						<cardCompraComp
							key={curso.IdCurso}
							data={curso}
						/>
					))
				)}
			</ScrollView>
		);
	}
}

export { CompraView };
