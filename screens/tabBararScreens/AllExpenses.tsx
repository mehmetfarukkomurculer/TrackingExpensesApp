import { useEffect, useState } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchExpenses } from "../../services/ExpensesService";
import { setExpenses } from "../../store/slices/expensesSlice";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const AllExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>();
  const expenses = useAppSelector((state) => state.expenses.expenses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const dbExpenses = await fetchExpenses();
        dispatch(setExpenses(dbExpenses));
      } catch (error) {
        setError("Could not fetch Expenses!");
      }

      setIsFetching(false);
    }
    getExpenses();
  }, []);
  

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  return (
    <>
      {isFetching ? (
        <LoadingOverlay />
      ) : (
        <ExpensesOutput
          expenses={expenses}
          fallbackText="You have no expenses within the specified period!"
        />
      )}
    </>
  );
};

export default AllExpenses;
