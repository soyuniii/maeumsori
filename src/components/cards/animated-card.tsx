import { Text } from "~/styles/text";

import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle
} from "react-native-reanimated";

const ITEM_WIDTH = 200;
const ITEM_SPACING = -50;
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_SPACING;

interface CardItem {
  source: any;
  title: string;
  date: string;
}

interface AnimatedCardProps {
  item: CardItem;
  index: number;
  scrollX: SharedValue<number>;
}

export const AnimatedCard = ({ item, index, scrollX }: AnimatedCardProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SNAP_INTERVAL,
      index * SNAP_INTERVAL,
      (index + 1) * SNAP_INTERVAL,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolation.CLAMP
    );

    const zIndex = interpolate(
      scrollX.value,
      inputRange,
      [1, 10, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
      zIndex: Math.round(zIndex),
    };
  });

  return (
      <Animated.View style={[animatedStyle, { 
        width: ITEM_WIDTH, 
        marginHorizontal: ITEM_SPACING / 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }]}>
        <TouchableOpacity activeOpacity={0.6}>
        <Image
          source={item.source}
          style={{ width: 200, height: 200, borderRadius: 10 }}
          contentFit="cover"
          transition={300}
        />
        </TouchableOpacity>
        <Text type="h2" className="text-center mt-4">
          {item.title}
        </Text>
        <Text type="b2" className="pt-1 text-center">
          {item.date}
        </Text>
      </Animated.View>
    );

    };