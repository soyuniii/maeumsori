import PlayPauseButton from "@/src/components/buttons/play-pause-button";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/styles/text";

export default function CoverScreen() {
    const [isPlaying, setIsPlaying] = useState(true);
    return(
        <SafeAreaView className="bg-white flex-1">
            <View className="flex-1 justify-center items-center gap-12">
                <TouchableOpacity onPress={() => { router.push("/detail")}}>
                <Image 
                    source={require('~/assets/images/puppy.png')} 
                    style={{width: 250, height: 250, borderRadius: 5}} 
                />
                <TouchableOpacity className="absolute right-4 bottom-4">
                    <PlayPauseButton isPlaying={isPlaying} onPress={() => { setIsPlaying(!isPlaying); }}/>
                </TouchableOpacity>
                </TouchableOpacity>
                <View className="gap-2 items-center">
                    <Text type="h1">가을아침</Text>
                    <Text type="h3">2025.09.13</Text>
                </View>
                
            </View>
           
        </SafeAreaView>
    );
}