import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
import { CardDetalleCompraView } from "../utility/CardDetalleCompraView";
import { DetalleCompraView } from "./DetalleCompraView";

class NewGuardarCompra extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.Compra = new Compra_Articulo();
		this.DetalleCompra = new Detalle_Compra();
		this.state = {
			Primaria: "",
			detallecompra: [],
			proveedor: "",
			fecha: Date().toString(),
			Total: 0.0,
		};

		this.keys = 0;
		this.CargarCompra = this.props.route.params.CargarCompra;
	}


	GuardarDetalleCompra = async (Detalle = new Detalle_Compra()) => {
		this.state.detallecompra.push(Detalle);
		this.setState({
			detallecompra: this.state.detallecompra,
		});
		this.props.navigation.navigate("NewGuardarCompra");
	};

	SeleccionProveedor = async (key, Nombre) => {
		this.setState({
			Primaria: key,
			proveedor: Nombre,
		});

		this.Compra.Id_Proveedor = key;
	};
	EliminarDetalleC = async (art) => {
		const eliminar = this.state.detallecompra.filter((i) => i.Id_Articulo !== art.Id_Articulo);
		this.setState({
			detallecompra: eliminar,
		});
	};

	Save = async () => {
		this.Compra.Fecha_Compra = this.state.fecha;

		await this.Compra.Save("Id_Compra");

		for (const key in this.state.detallecompra) {
			const detallecompra = this.state.detallecompra[key];
			detallecompra.Id_Compra = this.Compra.Id_Compra;
			await detallecompra.Save("Id_DetalleCompra");
		}
		this.CargarCompra();
	};

	render() {
		return (
			<ScrollView style={styles.CardStyle}>
				<Text style={styles.Title}>Nueva Compra</Text>

				<View>
					<View style={styles.CardStyle1}>
						<TextInput
							style={styles.InputStyle}
							placeholder="Proveedor"
							value={this.state.proveedor}
						/>
						<TextInput style={styles.InputStyle} placeholder="Id" value={this.state.Primaria} />
						<Button
							color="#0466C8"
							title="+"
							onPress={async () => {
								this.props.navigation.navigate("ProveedorView", {
									SeleccionProveedor: this.SeleccionProveedor,
								});
							}}
						/>
					</View>
					<TextInput
						style={styles.InputStyleF}
						placeholder="Fecha Compra"
						value={this.state.fecha}
					/>
				</View>
				<ScrollView style={styles.CardStyle}>
					<Button
						color="#0466C8"
						title="Agregar Articulo"
						onPress={async () => {
							this.props.navigation.navigate("FrmArticuloNuevoFact", {
								GuardarDetalleCompra: this.GuardarDetalleCompra,
							});
						}}
					/>

					<Text style={styles.Title}>Detalle de Compra</Text>
					{this.state.detallecompra.map((c) => (
						<CardDetalleCompraView key={c.Id_DetalleCompra} data={c} EliminarDetalleC = {this.EliminarDetalleC} />
					))}
				</ScrollView>
				<View style={styles.FrmProveedor}>
					<Text style={styles.Title}>Datos Usuarios</Text>
					<TextInput
						style={styles.InputStyle}
						placeholder="IdUsuario"
						multiline
						numberOfLines={1}
						onChangeText={(val) => (this.Compra.Id_Usuario = val)}
					></TextInput>
					<TextInput
						style={styles.InputStyle}
						placeholder="Total Costo"
						multiline
						numberOfLines={1}
						onChangeText={(val) => (this.Compra.Total_Costo = val)}
					></TextInput>
				</View>

				<Button
					color="#0466C8"
					title="Guardar Compra"
					onPress={async () => {
						await this.Save();
						this.props.navigation.navigate("CompraView");
					}}
				/>

				<Button
					color="#F82F40"
					title="Cancelar"
					onPress={() => {
						this.props.navigation.navigate("CompraView");
					}}
				/>
			</ScrollView>
		);
	}
}
export { NewGuardarCompra };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#f8f9fa",
		padding: 20,
		margin: 10,
		borderRadius: 10,
	},
	CardStyle1: {
		flex: 1,
		alignSelf: "stretch",
		flexDirection: "row",
		backgroundColor: "#f8f9fa",
		padding: 10,
		margin: 5,
		borderRadius: 5,
	},
	Title: {
		color: "#252422",
		fontSize: 20,
	},
	InputStyle: {
		width: "45%",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
	InputStyleF: {
		backgroundColor: "#f8f9fa",
		padding: 5,
		margin: 5,
		borderWidth: 1,
		borderRadius: 1.5,
	},
	FrmProveedor: {
		display: "flex",
		flexDirection: "column",
		padding: 4,
		backgroundColor: "#f8f9fa",
	},
});
