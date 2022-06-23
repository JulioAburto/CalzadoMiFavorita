import React from "react";
import { StyleSheet, Text, Button, ActivityIndicator, TextInput, ScrollView } from "react-native";
import { Articulo } from "../../Model/Articulo";
import { CardArticuloComp } from "../utility/CardArticuloComp";

class ArticuloView extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Dataset: [],
		};
		this.Articulo = new Articulo();
		this.CargarArticulo();
	}
	CargarArticulo = async (param = "") => {
		const Articulos = await this.Articulo.Get(param);
		this.setState({
			isLoading: false,
			Dataset: Articulos,
		});
	};
	GuardarArticulo = async (Articulop = new Articulo()) => {
		await Articulop.Save("Id_Articulo");
		this.props.navigation.navigate("ArticuloView");
	};
	render() {
		return (
			<ScrollView>
				<Text style={styles.Title}>Detalle de Articulo</Text>
				<Button
					title="Nuevo Articulo"
					color="#0466c8"
					onPress={() =>
						this.props.navigation.navigate("NewArticulo", {
							CargarArticulo: this.CargarArticulo,
						})
					}
				></Button>
				<TextInput
					style={{ padding: 10, margin: 10, borderWidth: 1, borderRadius: 3 }}
					placeholder="Buscar"
					onChangeText={(val) => this.CargarArticulo(val)}
				></TextInput>
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Dataset.map((articulo) => (
						<CardArticuloComp key={articulo.Id_Articulo} data={articulo} />
					))
				)}
			</ScrollView>
		);
	}
}
export { ArticuloView };
const styles = StyleSheet.create({
	Title: {
		color: "#252422",
		fontSize: 25,
	},
	InputStyle: {
		padding: 10,
		margin: 10,
		borderWidth: 2,
		borderRadius: 3,
	},
});
