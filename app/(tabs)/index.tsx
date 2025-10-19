import { AnimatedCard } from "@/src/components/cards/animated-card";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import { Dimensions, FlatList, ListRenderItem, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "~/components/icons/icon";
import { Text } from "~/styles/text";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const { width: screenWidth } = Dimensions.get("window");

interface ImageData {
  id: number;
  source: any;
  title: string;
  date: string;
}

const ITEM_WIDTH = 200;
const ITEM_SPACING = -50;
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_SPACING;
const images: ImageData[] = [
  { id: 1, source: require("~/assets/images/puppy.png"), title: "가을아침", date: "2025.10.1" },
  { id: 2, source: require("~/assets/images/puppy.png"), title: "겨울밤", date: "2025.10.4" },
  { id: 3, source: require("~/assets/images/puppy.png"), title: "봄날", date: "2025.10.11" },
  { id: 4, source: require("~/assets/images/puppy.png"), title: "여름오후", date: "2025.10.12" },
  { id: 5, source: require("~/assets/images/puppy.png"), title: "늦여름", date: "2025.10.14" },
];

export default function HomeScreen() {
  const date = format(new Date(), "yyyy.MM");
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<any>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: images.length - 1,
        animated: true,
      });
    }, 100);
  }, []);

  const renderItem: ListRenderItem<ImageData> = ({ item, index }) => {
    return <AnimatedCard item={item} index={index} scrollX={scrollX} />;
  };

  return (
    <SafeAreaView className="bg-monotone-100 flex-1">
      <View className="flex-row px-4 py-2 items-center">
        <TouchableOpacity onPress={() => {}}>
          <Icon name="Menu" size={24} />
        </TouchableOpacity>
        <View className="absolute left-0 right-0 items-center">
          <Text type="h1">{date}</Text>
        </View>
      </View>
      <View className="flex-1 justify-center items-center">
        <AnimatedFlatList
          ref={flatListRef}
          data={images as any}
          renderItem={renderItem as any}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={SNAP_INTERVAL}
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingHorizontal: (screenWidth - ITEM_WIDTH) / 1.5,
            alignItems: "center",
          }}
          keyExtractor={(item: any) => item.id.toString()}
          getItemLayout={(data: any, index: number) => ({
            length: SNAP_INTERVAL,
            offset: SNAP_INTERVAL * index,
            index,
          })}
        />
      </View>
      <TouchableOpacity className="absolute bottom-12 right-10 bg-puppy-400 p-4 rounded-full shadow-sm">
        <Icon name="Plus" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}