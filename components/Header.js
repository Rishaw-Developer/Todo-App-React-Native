import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

// const Height = window.innerHeight;
const Width = window.innerWidth;
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Welcome to Rishaw's todos app</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Width,
    display: "flex",
  },

  headerText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "cursive",
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});

// alignItems: 'center',
// justifyContent: 'center',
