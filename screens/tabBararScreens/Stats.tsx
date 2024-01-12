import { View, Text, StyleSheet } from "react-native";
import Filter from "../../components/UI/Filter";
import { BarChart } from "react-native-gifted-charts";
import { useAppSelector } from "../../store/hooks";
import { Colors } from "../../utils/colors";
const Stats = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);

  const janExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 0;
  });
  const febExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 1;
  });
  const marExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 2;
  });
  const aprExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 3;
  });
  const mayExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 4;
  });
  const junExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 5;
  });
  const julExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 6;
  });

  const augExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 7;
  });
  const sepExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 8;
  });
  const octExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 9;
  });
  const novExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 10;
  });
  const decExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === 11;
  });
  console.log(febExpenses.reduce((sum, expense) => sum + expense.amount, 0));
  const barData = [
    {
      value: janExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Jan",
      frontColor: Colors.stats1,
    },
    {
      value: febExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Feb",
      frontColor: Colors.stats2,
    },
    {
      value: marExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Mar",
      frontColor: Colors.stats3,
    },
    {
      value: aprExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Apr",
      frontColor: Colors.stats4,
    },
    {
      value: mayExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "May",
      frontColor: Colors.stats5,
    },
    {
      value: junExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Jun",
      frontColor: Colors.stats6,
    },
    {
      value: julExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Jul",
      frontColor: Colors.stats7,
    },
    {
      value: augExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Aug",
      frontColor: Colors.stats8,
    },
    {
      value: sepExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Sep",
      frontColor: Colors.stats9,
    },
    {
      value: octExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Oct",
      frontColor: Colors.stats10,
    },
    {
      value: novExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Nov",
      frontColor: Colors.stats11,
    },
    {
      value: decExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      label: "Dec",
      frontColor: Colors.stats12,
    },
  ];
  return (
    <View>
      <Text>TODO: use bar chart library for this screen.</Text>
      <Text>Call filte rmethods. add nice animations for bars.</Text>
      <View style={styles.barChartStyle}>
        <BarChart
          //barBorderRadius={8}
          data={barData}
          frontColor={"lightgray"}
          barWidth={8}
          roundedTop
          roundedBottom
          yAxisThickness={0} // yaxis yanındaki line ı kaldırır
          xAxisThickness={0} // xaxis üstündeki line ı kaldırır
          //showYAxisIndices={false}
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
  barChartStyle: {
    backgroundColor: Colors.secondary700,
    marginHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
});
