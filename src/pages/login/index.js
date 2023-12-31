import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
const { height, width } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (name, value) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    console.log(inputValue);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/CWLogo.png")}
        style={styles.imageContainer}
        resizeMode="contain"
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("email", value)}
        value={inputValue?.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("password", value)}
        value={inputValue?.password}
      />
      <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText]}>Log In</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginTop: 10 }]}>
        ALREADY HAVE AN ACCOUNT?{" "}
        <Text
          style={[styles.text, styles.signIn]}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          SIGN UP
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width,
    height,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageContainer: {
    width: 150,
    height: 150,
    position: "absolute",
    top: height / 8,
  },
  welcome: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 74.16,
  },
  input: {
    backgroundColor: "#525252",
    width: width - 40,
    margin: 10,
    padding: 15,
    color: "#fff",
    borderRadius: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#8D4AF8",
    padding: 15,
    width: width - 40,
    borderRadius: 30,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    color: "#A1A4B2",
  },
  signIn: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
