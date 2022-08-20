import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    width: "100%",
    padding: 10,
  },
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
  },
});
