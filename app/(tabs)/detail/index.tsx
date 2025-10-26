import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlayPauseButton from "~/components/buttons/play-pause-button";
import Back from "~/components/common/back";
import { Text } from "~/styles/text";

export default function DetailScreen() {
    const [isPlaying, setIsPlaying] = useState(true);

    return(
        <SafeAreaView className="bg-monotone-300 flex-1">
            <Back />
            <View className="flex-row m-8 items-center justify-center">
                <TouchableOpacity onPress={() => { router.push("/detail/cover")}}>
                <Image 
                    source={require('~/assets/images/puppy.png')} 
                    style={{width: 80, height: 80, borderRadius: 5}} 
                />
                </TouchableOpacity>
                <View className="mx-8 gap-2">
                    <Text type="h1" className="text-white">가을아침</Text>
                    <Text type="h3" className="text-white">2025.09.13</Text>
                </View>
                    <PlayPauseButton isPlaying={isPlaying} onPress={() => { setIsPlaying(!isPlaying); }} bgStyle={true} />
            </View>
            <ScrollView className="px-8">
             <Text type="h2" className="text-white">
                ...{"\n"}{"\n"}
                가을아침은 참 상쾌하다.{"\n"} 창문을 열고 시원한 공기를 들이마시니 기분이 좋아진다.{"\n"}
                가을은 단풍이 아름답기로 유명하다. {"\n"}산책을 하며 붉게 물든 나뭇잎들을 바라보는 것은 큰 즐거움이다.{"\n"}
                오늘은 친구들과 함께 공원에 가서 피크닉을 즐겼다. {"\n"}맛있는 음식을 나누고 웃음꽃이 피었다.{"\n"}
                가을은 수확의 계절이기도 하다. {"\n"}신선한 과일과 채소를 수확하며 자연의 풍요로움을 느낄 수 있다.{"\n"}
                저녁에는 따뜻한 차 한 잔과 함께 책을 읽으며 여유로운 시간을 보냈다.{"\n"}
                가을아침은 이렇게 나에게 많은 행복과 평화를 선사한다.{"\n"} 매일 아침이 기대된다.
             </Text>
             </ScrollView>
        </SafeAreaView>
    );
}