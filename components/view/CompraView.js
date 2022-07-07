import React from "react";
import { StyleSheet, Text, Button, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { CardCompraComp } from "../utility/cardCompraComp";

class CompraView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
			Articulo: [],
			DetalleCompraSeleccionado: {},
		};
		this.Compra = new Compra_Articulo();
		this.CargarCompra();
	}
	/* Carga las compras que se hacen, y se cargan al dataset*/
	CargarCompra = async (param = "") => {
		const Compras = await this.Compra.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Compras,
		});
	};
	/* Permite cargar los detalle que estan relacionados a las compras
	Cargando los datos a los arreglos vacios
	y posteriormente carga datos en las navigation */
	CargarDetalleCompra = async (Compra = new Compra_Articulo()) => {
		const DetalleCompras = await Compra.Detalle_Compra.get();
		this.setState({
			DetalleCompraSeleccionado: Compra,
			DetalleCompras: DetalleCompras,
		});
		this.props.navigation.navigate("DetalleCompraView", {
			Compra: Compra,
			Dataset: this.state.DetalleCompras,
			Articulo: this.state.DetalleCompras,
		});
	};
	render() {
		return (
			<ScrollView>
				<Text style={styles.Title}>Facturas de las compras</Text>
				<Button
					title="Nueva Factura De Compra"
					color="#0466C8"
					onPress={() =>
						this.props.navigation.navigate("NewGuardarCompra", {
							CargarCompra: this.CargarCompra,
						})
					}
				></Button>
				<TextInput
					style={{ padding: 10, margin: 10, borderWidth: 1, borderRadius: 3 }}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarCompra(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((compra) => (
						<CardCompraComp
							key={compra.Id_Compra}
							CargarDetalleCompra={this.CargarDetalleCompra}
							data={compra}
						/>
					))
				)}
			</ScrollView>
		);
	}
}

export { CompraView };
const styles = StyleSheet.create({
	Title: {
		color: "#001233",
		fontSize: 25,
	},
});
