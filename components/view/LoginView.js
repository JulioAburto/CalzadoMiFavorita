import { StyleSheet, Text, View, Button, TextInput } from "react-native";
const LoginView = (props) => {
	return (
		<View style={styles.contenedorP}>
			<View style={styles.contenedorS}>
				<Text style={styles.Title}>Bienvenido al Sistema</Text>
			</View>
			<View style={styles.ContenedorOp}>
				<TextInput
					style={styles.InputStyle}
					placeholder="UserName"
					textContentType="username"
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Password"
					textContentType="newPassword"
					secureTextEntry={true}
				></TextInput>
				<Button
					title="Entrar"
					color="#0466C8"
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
		backgroundColor: "#979DAC",
		padding: 20,
		justifyContent: "center",
	},
	contenedorS: {
		flex: 1,
		justifyContent: "center",
		marginTop: "25%",
		paddingBottom: 30,
	},
	Title: {
		color: "#001845",
		fontSize: 26,
		fontWeight: 800,
		marginLeft: "10%"
	},
	ContenedorOp: {
		flex: 5,
	},
	InputStyle: {
		padding: 10,
		margin: 10,
		borderWidth: 2,
		borderRadius: 5,
	},
});
