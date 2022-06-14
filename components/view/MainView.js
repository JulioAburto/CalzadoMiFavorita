import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VistaPrincipal from "./VistaPrincipal";

const Tab = createBottomTabNavigator();

const MainView = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="VistaPrincipal" component={VistaPrincipal} />
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
