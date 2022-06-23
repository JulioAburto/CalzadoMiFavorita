import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VistaPrincipal from "./VistaPrincipal";
import { ProveedorView } from "./ProveedorView";
import { ArticuloView } from "./ArticuloView";

const Tab = createBottomTabNavigator();

const MainView = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Vista Principal" component={VistaPrincipal}  />
			<Tab.Screen name="ProveedorView" component={ProveedorView} />
			<Tab.Screen name="ArticuloView" component={ArticuloView} />
		</Tab.Navigator>
	);
};
export { MainView };
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#999",
		padding: 20,
		justifyContent: "center",
	},
	Title: {
		color: "#fff",
		fontSize: 26,
	},
	OptionsContainer: {
		flex: 3,
	},
});
