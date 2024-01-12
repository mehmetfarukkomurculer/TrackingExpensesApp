import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Colors } from "../../utils/colors";

interface inputProps {
  label: string;
  textInputConfig?: TextInputProps;
  style?: ViewStyle;
}

const Input: React.FC<inputProps> = ({ label, style, textInputConfig }) => {
  let inputStyles: ViewStyle[] = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: Colors.primary500,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.primary500,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.secondary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
