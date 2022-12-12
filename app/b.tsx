import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Spacer } from "../components/Spacer";
import { LoginButton } from "../components/LoginButton";

export default function BScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Stack.Screen options={{ title: 'B' }} />
      <Text>Screen B</Text>
      <Spacer />
      <Link href="/">Go to home</Link>
      <Spacer />
      <LoginButton />
    </View>
  );
}