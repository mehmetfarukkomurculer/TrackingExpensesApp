import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Colors } from "../../utils/colors";
import { ExpensesProps } from "../../interfaces/ExpensesProps";
import { useEffect, useState } from "react";
import { getDAteMinusDays } from "../../utils/date";
import Filter from "../UI/Filter";
import { TemporaryProps } from "../../interfaces/TemporaryProps";

interface ExpensesOutputProps {
  expenses: TemporaryProps[];
  fallbackText: string;
}

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  expenses,
  fallbackText,
}) => {
  const [periodName, setPeriodName] = useState<string>("");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [active, setActive] = useState("Total");

  useEffect(() => {
    setFilteredExpenses(expenses);
    setPeriodName("Total");
    setActive("Total");
  }, [expenses]);

  function filterLastWeek() {
    const lastWeekExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLastWeek = getDAteMinusDays(today, 7);
      const expenseDate = new Date(expense.date);
      return expenseDate > dateLastWeek;
    });
    setFilteredExpenses(lastWeekExpenses);
    setPeriodName("Last Week");
    setActive("1week");
  }

  function filterAll() {
    setFilteredExpenses(expenses);
    setPeriodName("Total");
    setActive("Total");
  }
  function filterLastMonth() {
    const lastMonthExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLastMonth = getDAteMinusDays(today, 30);
      const expenseDate = new Date(expense.date);
      return expenseDate > dateLastMonth;
    });
    setFilteredExpenses(lastMonthExpenses);
    setPeriodName("Last Month");
    setActive("1month");
  }

  function filterLast3Months() {
    const last3MonthsExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLast3Months = getDAteMinusDays(today, 91);
      const expenseDate = new Date(expense.date);
      return expenseDate > dateLast3Months;
    });
    setFilteredExpenses(last3MonthsExpenses);
    setPeriodName("Last 3 Months");
    setActive("3months");
  }

  function filterLast6Months() {
    const filterLast6Months = expenses.filter((expense) => {
      const today = new Date();
      const dateLast6Months = getDAteMinusDays(today, 182);
      const expenseDate = new Date(expense.date);
      return expenseDate > dateLast6Months;
    });
    setFilteredExpenses(filterLast6Months);
    setPeriodName("Last 6 Months");
    setActive("6months");
  }

  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (filteredExpenses.length > 0) {
    content = <ExpensesList expenses={filteredExpenses} />;
  }
  return (
    <View style={styles.container}>
      <Filter
        filterAll={filterAll}
        filterLastMonth={filterLastMonth}
        filterLastWeek={filterLastWeek}
        filterLast3Months={filterLast3Months}
        filterLast6Months={filterLast6Months}
        active={active}
      />
      <ExpensesSummary periodName={periodName} expenses={filteredExpenses} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary300,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  fallbackText: {
    color: Colors.tertiary100,
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
  },
});
