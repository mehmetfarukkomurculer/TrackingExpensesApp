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
  invalid: boolean;
}

const Input: React.FC<inputProps> = ({
  invalid,
  label,
  style,
  textInputConfig,
}) => {
  let inputStyles: ViewStyle[] = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if(invalid){
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
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
    color: Colors.primary1000,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.primary500,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.secondary100,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: Colors.error100,
  },
  invalidInput: {
    backgroundColor: Colors.error100,
  },
});
