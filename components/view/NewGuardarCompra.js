import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import {} from "module";
import { Compra_Articulo } from "../../Model/Compra_Articulo";
import { Detalle_Compra } from "../../Model/Detalle_Compra";
import { DetalleCompraView } from "./DetalleCompraView";

class NewGuardarCompra extends React.Component {
	constructor(props) {
		super();
		this.props = props;

		this.Compra = new Compra_Articulo();
		this.DetalleCompra = new Detalle_Compra();

		this,
			(this.state = {
				Primaria: "ID",
				detallecompra: [],
				proveedor: "Proveedor",
				fecha: Date().toString(),
			});

		this.keys = 0;

		this.CargarCompra = this.props.route.params.CargarCompra;
	}

	GuardarDetalleCompra = async (DetalleCompra = new Detalle_Compra(), key, flag) => {
		if (this.state.detallecompra.length > 0) {
			const detallecompra = this.state.detallecompra.map((p) => {
				if (p.Id_Articulo === key) {
					this.keys = p.Id_Articulo;
				}
				return p;
			});
			if (this.keys == key) {
				this.setState({
					detallecompra: detallecompra,
				});
			} else {
				this.state.detallecompra.push(DetalleCompra);

				this.setState({
					detallecompra: this.state.detallecompra,
				});
			}
		} else {
			this.state.detallecompra.push(DetalleCompra);

			this.setState({
				detallecompra: this.state.detallecompra,
			});
		}
		this.props.navigation.navigate("NewGuardarCompra");
	};

	SeleccionProveedor = async (key, Nombre) => {
		this.setState({
			Primaria: key,
			proveedor: Nombre,
		});

		this.Compra.Id_Proveedor = key;
	};

	GuardarCompra = async () => {
		this.Compra.Fecha_Compra = this.state.fecha;

		await this.Compra.Save("Id_Compra");
		for (let index = 0; index < this.state.detallecompra.length; index++) {
			const detallecompra = this.state.detallecompra[index];
			detallecompra.Id_Articulo = this.Compra.Id_Compra;

			await this.DetalleCompra.Save("Id_DetalleCompra");
		}
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
						// style={styles.InputStyle}
						style={styles.InputStyleF}
						placeholder="Fecha Compra"
						value={this.state.fecha}
					/>
				</View>
				<Button
					color="#0466C8"
					title="Agregar Articulo"
					onPress={async () => {
						//this.props.navigation.navigate("")
					}}
				/>

				<Text style={styles.Title}>Detalle de Compra</Text>
				<ScrollView style={styles.CardStyle}>
					{this.state.detallecompra.map((c) => (
						<DetalleCompraView key={c.Id_Articulo} data={c} />
					))}
				</ScrollView>

				<Button
					color="#0466C8"
					title="Guardar Compra"
					onPress={async () => {
						const response = await this.Save();

						if (response) {
							await this.CargarCompra();
							this.setState({
								Primaria: "ID",
								detallecompra: [],
								proveedor: "Proveedor",
								fecha: Date().toString(),
							});

							this.props.navigation.navigate("CompraView");
						}
					}}
				/>

				<Button
					color="#0466C8"
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
		backgroundColor: "#e9ecef",
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
});
