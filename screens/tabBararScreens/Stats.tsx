import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { useAppSelector } from "../../store/hooks";
import { Colors } from "../../utils/colors";
import { TemporaryProps } from "../../interfaces/TemporaryProps";
import { useEffect, useState } from "react";

const height = Dimensions.get("window").height;

interface itemProp {
  value: number;
  label: string;
  frontColor: string;
}

const getMonthlyExpenses = (expenses: TemporaryProps[], monthIndex: number) => {
  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === monthIndex;
  });
};

const Stats = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const [expensesState, setExpensesState] = useState(expenses);
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

  useEffect(() => {
    setExpensesState(expenses);
  }, [expenses]);

  const barData = months.map((month, index) => {
    const monthlyExpenses = getMonthlyExpenses(expensesState, index);
    return {
      value: monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: month,
      frontColor: Colors[`stats${index + 1}` as keyof typeof Colors],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.barChartStyle}>
        <BarChart
          data={barData}
          height={height / 2}
          frontColor={"lightgray"}
          barWidth={25}
          barBorderRadius={6}
          yAxisThickness={0}
          xAxisThickness={0}
          isAnimated
          yAxisTextStyle={{ color: Colors.primary1000 }}
          xAxisLabelTextStyle={{
            color: Colors.primary1000,
            transform: [{ rotate: "300deg" }],
          }}
          hideRules
          spacing={5}
          renderTooltip={(item: itemProp, index: number) => {
            return (
              <View
                style={styles.toolTipContainer}>
                <Text style={styles.toolTipText}>${item.value.toFixed(2)}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary100,
  },
  barChartStyle: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  toolTipText: {
    color: Colors.primary300,
  },
  toolTipContainer: {
    marginBottom: 20,
    marginLeft: -6,
    backgroundColor: Colors.primary1000,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  }
});
