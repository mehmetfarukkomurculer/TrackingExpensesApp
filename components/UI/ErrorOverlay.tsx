import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/colors";
import Button from "./Button";

interface ErrorOverlayProps {
    message: string;
}   


const ErrorOverlay: React.FC<ErrorOverlayProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: Colors.primary1000
    },
    text: {
        color: Colors.primary900,
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
