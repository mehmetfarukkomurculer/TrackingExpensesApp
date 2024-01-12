import {
  Pressable,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { Colors } from "../../utils/colors";
import { ExpenseProp } from "../../interfaces/ExpenseProp";

interface ButtonProps {
  buttonText: string;
  onPress: (expenseData?: ExpenseProp) => void;
  mode?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onPress,
  mode,
  style,
}) => {
  const handlePress = (event: GestureResponderEvent) => {
    // Call your onPress function with or without an argument based on your needs
    onPress(); // or onPress(yourExpenseData);
  };
  return (
    <View style={style}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {buttonText}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.primary300,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: Colors.tertiary100,
    textAlign: "center",
  },
  flatText: {
    color: Colors.primary600,
  },
  pressed: {
    opacity: 0.5,
    borderRadius: 4,
  },
});
