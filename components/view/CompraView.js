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
	render() {
		return (
			<ScrollView>
				<Text>Facturas de las compras</Text>
				<Button
				title="Nueva Compra"
				onPress={()=>
					this.props.navigation.navigate(this.CargarCompra)
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
							data={compra}
						/>
					))
				)}
			</ScrollView>
		);
	}
}

export { CompraView };
