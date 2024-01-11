import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Colors } from "../../utils/colors";
import { ExpensesProps } from "../../interfaces/ExpensesProps";
import Button from "../UI/Button";
import { useState } from "react";
import { getDAteMinusDays } from "../../utils/date";
import Filter from "../UI/Filter";

interface ExpensesOutputProps {
  expenses: ExpensesProps[];
}

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({ expenses }) => {
  const [periodName, setPeriodName] = useState<string>("");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  function filterLastWeek() {
    const lastWeekExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLastWeek = getDAteMinusDays(today, 7);
      return expense.date > dateLastWeek;
    });
    setFilteredExpenses(lastWeekExpenses);
    setPeriodName("Last Week");
  }

  function filterAll() {
    setFilteredExpenses(expenses);
    setPeriodName("Total");
  }
  function filterLastMonth() {
    const lastMonthExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLastMonth = getDAteMinusDays(today, 30);
      return expense.date > dateLastMonth;
    });
    setFilteredExpenses(lastMonthExpenses);
    setPeriodName("Last Month");
  }

  function filterLast3Months() {
    const last3MonthsExpenses = expenses.filter((expense) => {
      const today = new Date();
      const dateLast3Months = getDAteMinusDays(today, 91);
      return expense.date > dateLast3Months;
    });
    setFilteredExpenses(last3MonthsExpenses);
    setPeriodName("Last 3 Months");
  }

  function filterLast6Months() {
    const filterLast6Months = expenses.filter((expense) => {
      const today = new Date();
      const dateLast6Months = getDAteMinusDays(today, 182);
      return expense.date > dateLast6Months;
    });
    setFilteredExpenses(filterLast6Months);
    setPeriodName("Last 6 Months");
  }

  return (
    <View style={styles.container}>
      <Filter
        filterAll={filterAll}
        filterLastMonth={filterLastMonth}
        filterLastWeek={filterLastWeek}
        filterLast3Months={filterLast3Months}
        filterLast6Months={filterLast6Months}
      />
      <ExpensesSummary periodName={periodName} expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
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
});
