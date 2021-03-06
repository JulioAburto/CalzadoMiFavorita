import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//views
import { CompraView } from "./CompraView";
import { DetalleCompraView } from "./DetalleCompraView";
import { NewArticulo } from "./NewArticulo";
import { ArticuloView } from "./ArticuloView";
import { ProveedorView } from "./ProveedorView";
import { NewProveedor } from "./NewProveedor";
import { NewDetalleCompra } from "./NewDetalleCompra";
import { NewGuardarCompra } from "./NewGuardarCompra";
import { FrmArticuloNuevoFact } from "./FrmArticuloNuevoFact";
import { CardDetalleCompraView } from "../utility/CardDetalleCompraView";

export default function VistaPrincipal() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="CompraView" component={CompraView} />
			<Stack.Screen name="DetalleCompraView" component={DetalleCompraView} />
			<Stack.Screen name="ArticuloView" component={ArticuloView} />
			<Stack.Screen name="NewArticulo" component={NewArticulo} />
			<Stack.Screen name="ProveedorView" component={ProveedorView} />
			<Stack.Screen name="NewProveedor" component={NewProveedor} />
			<Stack.Screen name="NewDetalleCompra" component={NewDetalleCompra} />
			<Stack.Screen name="NewGuardarCompra" component={NewGuardarCompra} />
			<Stack.Screen name="FrmArticuloNuevoFact" component={FrmArticuloNuevoFact} />
			<Stack.Screen name="CardDetalleCompraView" component={CardDetalleCompraView} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		height: 40,
		fontSize: 25,
	},
});
