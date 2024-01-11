import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size: number;
  color: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size,
  color,
}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;


const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 6,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    }
})
