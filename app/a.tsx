import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Spacer } from "../components/Spacer";
import { LoginButton } from "../components/LoginButton";


export default function AScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Stack.Screen options={{ title: 'A' }} />
      <Text>Screen A</Text>
      <Spacer />
      <Link href="/b">Go to b</Link>
      <Spacer />
      <LoginButton />
    </View>
  );
}