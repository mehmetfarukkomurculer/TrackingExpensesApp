import { View, Text } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector } from "../../store/hooks";
const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput periodName="Total" expenses={expenses}/>
  );
};

export default AllExpenses;
