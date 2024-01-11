import { View, Text, StyleSheet } from "react-native";
import { ExpensesProps } from "../../interfaces/ExpensesProps";
import { Colors } from "../../utils/colors";

interface ExpensesSummaryProps {
  periodName: string;
  expenses: ExpensesProps[];
}

const ExpensesSummary: React.FC<ExpensesSummaryProps> = ({
  periodName,
  expenses,
}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{periodName}</Text>
      <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary1000,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodText: {
    fontSize: 16,
    color: Colors.primary400,
  },
  sumText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary300
  }
});
