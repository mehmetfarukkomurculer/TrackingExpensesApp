import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary300} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: Colors.primary1000
    }
})
