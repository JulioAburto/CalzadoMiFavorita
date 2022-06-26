import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { LoginView } from "./components/view/LoginView";
import { MainView } from "./components/view/MainView";
import { NewProveedor } from "./components/view/NewProveedor";
import { NewArticulo } from "./components/view/NewArticulo";
import { ArticuloView } from "./components/view/ArticuloView";
import { ProveedorView } from "./components/view/ProveedorView";
import { NewDetalleCompra } from "./components/view/NewDetalleCompra";

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="LoginView" component={LoginView} />
				<Stack.Screen name="MainView" component={MainView} />
				{/* <Stack.Screen name="NewProveedor" component={NewProveedor} />
				<Stack.Screen name="ArticuloView" component={ArticuloView} />
				<Stack.Screen name="NewArticulo" component={NewArticulo} /> */}
			</Stack.Navigator>
		</NavigationContainer>

		// <View style={styles.container}>
		// 	<Text>Calzado Mi Favorita</Text>
		// 	<Text>Sistema de Facturacion</Text>
		// 	<Text>Computadora Julio a Computadora Chucas</Text>
		// 	<StatusBar style="auto" />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
