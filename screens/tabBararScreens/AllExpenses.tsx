import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector } from "../../store/hooks";
const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput
      expenses={expenses}
      fallbackText="You have no expenses within the specified period!"
    />
  );
};

export default AllExpenses;
