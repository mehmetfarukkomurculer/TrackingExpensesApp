import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { TemporaryProps } from "../../interfaces/TemporaryProps";

interface ExpensesOutputProps {
  expenses: TemporaryProps[];
}

const ExpensesList: React.FC<ExpensesOutputProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={(itemData) => <ExpenseItem description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.date} id={itemData.item.id}/>}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ExpensesList;
