import { StyleSheet, Text, View, Button } from "react-native";
const LoginView = (props) => {
	return (
		<View style={styles.contenedorP}>
			<View style={styles.contenedorS}>
				<Text style={styles.Title}>Welcome</Text>
			</View>
			<View style={styles.ContenedorOp}>
				<Button
					title="Login"
					onPress={() => {
						props.navigation.navigate("MainView");
					}}
				/>
			</View>
		</View>
	);
};
export { LoginView };

const styles = StyleSheet.create({
	contenedorP: {
		flex: 1,
		backgroundColor: "#000",
		padding: 20,
		justifyContent: "center",
	},
	contenedorS: {
		flex: 1,
		justifyContent: "center",
	},
	Title: {
		color: "#fff",
		fontSize: 26,
	},
	ContenedorOp: {
		flex: 5,
	},
});