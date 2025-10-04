import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center">
        <Text className="text-3xl">Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}