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

const Signup = ({ navigation }) => {
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
      <Text style={styles.welcome}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("fullName", value)}
        value={inputValue?.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("emailAddress", value)}
        value={inputValue?.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("password", value)}
        value={inputValue?.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#a1a4b2"
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
        value={inputValue?.password}
      />
      <Text style={[styles.policyText, { marginTop: 10 }]}>
        I have read the{" "}
        <Text
          style={[styles.text, styles.policy]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Privacy Policy
        </Text>
      </Text>
      <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
        <Text style={[styles.buttonText]}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginTop: 10 }]}>
        ALREADY HAVE AN ACCOUNT?{" "}
        <Text
          style={[styles.text, styles.signIn]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          SIGN IN
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
  },
  imageContainer: {
    width: 150,
    height: 150,
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
    // margin: 10,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    color: "#A1A4B2",
    marginBottom: 50,
  },
  signIn: {
    color: "#fff",
    fontWeight: "bold",
  },
  policyText: {
    color: "#A1A4B2",
    alignSelf: "flex-start",
    paddingLeft: 35,
  },
  policy: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Signup;
