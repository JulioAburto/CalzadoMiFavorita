import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Button } from "react-native";
import { Detalle_Compra } from "../../Model/Detalle_Compra";

class CompraContenido extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = {
			isLoading: true,
			Detalles: [],
		};
		this.Detalle_Compra = this.props.Detalle_Compra ?? new Detalle_Compra();
		this.cargarContenido();
	}

	cargarContenido = async () => {
		const Detalles = await this.Detalle_Compra.Articulo.get();
		this.setState({
			isLoading: false,
			Detalles: Detalles,
		});
	};

	render() {
		return (
			<View>
				<Text style={styles.Title}>Contenido Articulo</Text>
				{/* <Button
					title="Nuevo Articulo"
					color="#0466C8"
					onPress={() => {
						this.props.NuevoContenido(this.Detalle_Compra, this.cargarContenidos);
					}}
				></Button> */}
				{this.state.isLoading ? (
					<ActivityIndicator />
				) : (
					this.state.Detalles.map((p) => {
						return (
							<View style={styles.CardStyle} key={p.Id_Articulo}>
								<Text style={styles.Atribute}>Nombre: {p.Nombre_Articulo}</Text>
								<Text style={styles.Atribute}>Descripcion: {p.Descripcion_Articulo}</Text>
								<Text style={styles.Atribute}>Fecha de Registro: {p.Fecha_Registro}</Text>
							</View>
						);
					})
				)}
			</View>
		);
	}
}
export { CompraContenido };

const styles = StyleSheet.create({
	CardStyle: {
		backgroundColor: "#33415C",
		flex: 1,
		alignSelf:"stretch",
		flexDirection:"column",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 20,
	},
	Atribute: {
		flex:1,
		  alignSelf: "stretch",
		color: "#e9ecef",
		fontSize: 13,
	},
	Resumen: {
		color: "#e9ecef",
		fontSize: 12,
	},
});
