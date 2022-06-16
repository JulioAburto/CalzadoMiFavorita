import React from "react";
import { StyleSheet, Text, Button, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { CardCompraComp } from "../utility/CardCompraComp";

class CompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
			DetalleCompraSeleccionado: {},
		};
		this.Compra = new Compra_Articulo();
		this.CargarCompra();
	}
	CargarCompra = async (param = "") => {
		const Compras = await this.Compra.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Compras,
		});
	};
	CargarDetalleCompra = async (Compra = new Compra_Articulo()) => {
		const DetalleCompras = await Compra.Detalle_Compra.get();
		this.setState({
			
			DetalleCompraSeleccionado: Compra,
			DetalleCompras: DetalleCompras,
		});
		this.props.navigation.navigate("DetalleCompraView", {
			Compra: Compra,
			Dataset: this.state.DetalleCompras,
		});
	};
	render() {
		return (
			<ScrollView>
				<Text>Facturas de las compras</Text>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((compra) => (
						<CardCompraComp
							key={compra.Id_Compra}
							data={compra}
							CargarDetalleCompra={this.CargarDetalleCompra}
						/>
					))
				)}
			</ScrollView>
		);
	}
}

export { CompraView };
