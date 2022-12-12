import { Stack } from 'expo-router';
import { AuthenticationProvider } from '../components/AuthProvider';

export default function Layout() {
  return (
    <AuthenticationProvider>
      <Stack />
    </AuthenticationProvider>
  );
};
