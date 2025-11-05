import Back from "@/src/components/common/back";
import { format } from "date-fns";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/styles/text";

export default function ListScreen() {
    const date = format(new Date(), "yyyy.MM");
    return(
        <SafeAreaView className="bg-monotone-100 flex-1">
            <Back />
            <ScrollView>
             <View className="p-4">
                <Text type="h1">{date}</Text>
            </View>
            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={()=>{ router.push('/detail')}}
                className="flex-row items-center px-4 bg-puppy-300 py-2.5 ">
                <Image
                    source={require("~/assets/images/puppy.png")}
                    style={{width: 60, height: 60, borderRadius: 12}}
                />
                <View className="gap-1">
                <Text type="b1" className="px-4 text-white">2025.11.12</Text>
                <Text type="b1" className="px-4 text-white">가을아침</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}