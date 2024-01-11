import { Pressable, View, StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/colors";
import { getFormattedDate } from "../../utils/date";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { NavigationParamList } from "../../utils/NavigationParamList";

interface ExpenseItemProps {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  description,
  amount,
  date,
  id,
}) => {
  const navigation = useNavigation<NavigationProp<NavigationParamList>>();

  function expensePressHandler() {
    // Navigate to ManageExpenses screen with expenseId parameter
    navigation.navigate("ManageExpenses", { expenseId: id });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.descriptionText]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    color: Colors.tertiary200,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.tertiary100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amountText: {
    color: Colors.secondary700,
    fontWeight: "bold",
  },
});
