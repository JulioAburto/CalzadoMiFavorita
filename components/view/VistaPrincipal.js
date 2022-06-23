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
export default function VistaPrincipal() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="CompraView" component={CompraView} />
			<Stack.Screen name="DetalleCompraView" component={DetalleCompraView} />
			<Stack.Screen name="NewArticulo" component={NewArticulo} />
		
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
