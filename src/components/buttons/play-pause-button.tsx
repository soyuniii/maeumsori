import { TouchableOpacity } from "react-native";
import Icon from "../icons/icon";

interface PlayPauseButtonProps {
    isPlaying: boolean;
    onPress: () => void;
    bgStyle?: boolean;
}

export default function PlayPauseButton({ isPlaying, onPress, bgStyle }: PlayPauseButtonProps) {
    return(
        <TouchableOpacity className={`p-3 ml-auto rounded-full ${bgStyle ? 'bg-monotone-200' : ''}`} onPress={onPress}>
            {isPlaying ? <Icon name="Pause" size={bgStyle ? 20 : 26}/> : <Icon name="Play" size={bgStyle ? 20 : 26}/>}
        </TouchableOpacity>
    );
}