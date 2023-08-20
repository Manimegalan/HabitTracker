import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/store";

import RootNavigation  from "./src/routes/RootNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}
