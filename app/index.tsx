import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { Spacer } from "../components/Spacer";
import { LoginButton } from "../components/LoginButton";

export default function HomeScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text>Home</Text>
      <Spacer />
      <Link href="/a">Go to a</Link>
      <Spacer />
      <LoginButton />
    </View>
  );
}