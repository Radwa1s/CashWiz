import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Cashwiz</Text>
      <Text>
        your personal finance assistant! With our easy-to-use app, you'll be
        able to track your daily spending and make more informed decisions about
        your money.
      </Text>
      <Button
        title="Get started"
        onPress={() => navigation.navigate("AuthWithGoogle")}
      />
    </View>
  );
}
