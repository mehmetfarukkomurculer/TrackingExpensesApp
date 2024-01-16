import { useEffect, useState } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchExpenses } from "../../services/ExpensesService";
import { setExpenses } from "../../store/slices/expensesSlice";
const AllExpenses = () => {
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function getExpenses(){
      const dbExpenses = await fetchExpenses();
      dispatch(setExpenses(dbExpenses));
    }
    getExpenses();
  }, [])
  console.log(expenses);
  return (
    <ExpensesOutput
      expenses={expenses}
      fallbackText="You have no expenses within the specified period!"
    />
  );
};

export default AllExpenses;
