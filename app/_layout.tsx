import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../src/styles/global.css";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Pretendard-Medium': require('../src/assets/Pretendard-Medium.ttf'),
    'Pretendard-Regular': require('../src/assets/Pretendard-Regular.ttf'),
    'Pretendard-SemiBold': require('../src/assets/Pretendard-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
