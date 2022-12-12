import { useAuthentication } from "./AuthProvider";
import { Text, Pressable } from "react-native";

export const LoginButton = () => {
  const { login, isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    return <Text>Logged In</Text>;
  }

  return (
    <Pressable onPress={login}>
      <Text>LOG IN</Text>
    </Pressable>
  );
}