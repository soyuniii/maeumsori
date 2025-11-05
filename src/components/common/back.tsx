import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import Icon from "../icons/icon";

export default function Back() {
    return (
        <TouchableOpacity onPress={() => router.back()} className="p-4">
            <Icon name="ArrowLeft" size={24} />
        </TouchableOpacity>
    );
}