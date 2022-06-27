import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
const LoginView = (props) => {
	return (
		<View style={styles.contenedorP}>
			<View style={styles.contenedorS}>
				<Text style={styles.Title}>Bienvenido al Sistema</Text>
				<Text style={styles.Title}>Calzado Mi Favorita</Text>
			</View>
			<Image
				source={require("../../img/sneakers.png")}
				style={{ width: 140, height: 140, marginBottom: 15, marginLeft: 120 }}
			/>
			<View style={styles.ContenedorOp}>
				<Text style={styles.Title}>Log In</Text>
				<TextInput
					style={styles.InputStyle}
					placeholder="UserName"
					textContentType="username"
					// autoFocus="true"
					placeholderTextColor="#001233"
				></TextInput>
				<TextInput
					style={styles.InputStyle}
					placeholder="Password"
					textContentType="newPassword"
					secureTextEntry={true}
					placeholderTextColor="#001233"
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
		backgroundColor: "#dee2e6",
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
		fontSize: 30,
		fontWeight: 800,
		alignContent: "center",
		textAlign: "center",
	},
	ContenedorOp: {
		backgroundColor: "#ced4da",
		borderRadius: 20,
		flex: 5,
	},
	InputStyle: {
		padding: 10,
		margin: 10,
		borderWidth: 2,
		borderRadius: 5,
		color: "#001845",
	},
});
