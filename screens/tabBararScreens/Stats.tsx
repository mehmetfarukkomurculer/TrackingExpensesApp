import { View, Text, StyleSheet } from "react-native";
import Filter from "../../components/UI/Filter";
import { BarChart } from "react-native-gifted-charts";
import { useAppSelector } from "../../store/hooks";
import { Colors } from "../../utils/colors";
import { TemporaryProps } from "../../interfaces/TemporaryProps";
import { useEffect } from "react";

const getMonthlyExpenses = (expenses: TemporaryProps[], monthIndex: number) => {
  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === monthIndex;
  });
};

const Stats = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const barData = months.map((month, index) => {
    const monthlyExpenses = getMonthlyExpenses(expenses, index);
    return {
      value: monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: month,
      frontColor: Colors[`stats${index + 1}` as keyof typeof Colors],
    };
  });

  return (
    <View style={styles.container}>
      <Text>TODO: use bar chart library for this screen.</Text>
      <Text>Call filter methods. add nice animations for bars.</Text>
      <View style={styles.barChartStyle}>
        <BarChart
          data={barData}
          frontColor={"lightgray"}
          barWidth={20}
          barBorderRadius={6}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisIndicesColor={Colors.error500}
          isAnimated
          yAxisTextStyle={{ color: Colors.secondary100 }}
          xAxisLabelTextStyle={{ color: Colors.secondary100 }}
          hideRules
        />
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary700,
  },
  barChartStyle: {
    marginHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
});
