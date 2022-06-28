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

	SeleccionarProveedor = async (key, Nombre) => {
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

            await this.DetalleCompra.Save("Id_DetalleCompra")
        }
    };

    render() {
        return (
            <ScrollView>
                <Text>Nueva Compra</Text>

                <View>
                    <View>
                        <TextInput
                            placeholder="Proveedor"
                            value={this.state.proveedor}
                        />
                        <TextInput
                            placeholder="Id"
                            value={this.state.Primaria}
                        />
                        <Button
                            title="+"
                            onPress={async () => {
                                //this.props.navigation.navigate("ProveedorView", {
                                    //SeleccionarProveedor: this.
                                //})
                            }}
                        />
                    </View>
                    <TextInput
                        placeholder="Fecha Compra"
                        value={this.state.fecha}
                    />
                </View>
                <Button
                    title="Agregar Articulo"
                    onPress={async () => {
                        //this.props.navigation.navigate("")
                    }}
                />

                <Text>Detalle de Compra</Text>
                <ScrollView>
                    {this.state.detallecompra.map((c) => (
                        <DetalleCompraView
                            key={c.Id_Articulo}
                            data= {c}
                        />
                    ))}
                </ScrollView>

                <Button
                    title="Guardar Compra"
                    onPress={async() => {
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
                    title="Cancelar"
                    onPress={() => {
                        this.props.navigation.navigate("CompraView");
                    }}
                />
            </ScrollView>
        )
    }
}
export { NewGuardarCompra };
