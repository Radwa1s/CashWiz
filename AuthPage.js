import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AuthPage({ navigation }) {
  return (
    <Button
      onPress={() => navigation.navigate("income")}
      title="Continue with Google "
    >
      Continue with Google
    </Button>
  );
}
