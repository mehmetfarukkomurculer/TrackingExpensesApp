import { View, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../utils/colors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../store/slices/expensesSlice";
import ExpenseForm from "../../components/ManageExpense/ExpenseForm";
import { ExpenseProp } from "../../interfaces/ExpenseProp";
import {
  storeExpense,
  updateAnExpense,
  deleteAnExpense,
} from "../../services/ExpensesService";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const allExpenses = useAppSelector((state) => state.expenses.expenses);
  const selectedExpense = allExpenses.find(
    (expense) => expense.id === editedExpenseId
  );
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteAnExpense(editedExpenseId);
      dispatch(deleteExpense(editedExpenseId));
      navigation.goBack();
    } catch (error) {
      setError("Could not delete exoense - please try again later.");
      setIsSubmitting(false);
    }
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(expenseData: ExpenseProp) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateAnExpense(editedExpenseId, expenseData);
        dispatch(
          updateExpense({
            id: editedExpenseId,
            description: expenseData.description,
            amount: +expenseData.amount,
            date: expenseData.date,
          })
        );
      } else {
        const id = storeExpense(expenseData);
        dispatch(
          addExpense({
            id: id.toString(),
            description: expenseData.description,
            amount: +expenseData.amount,
            date: expenseData.date,
          })
        );
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save the data - please try again later.");
      setIsSubmitting(false);
    }
  }

  
  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }
  if (isSubmitting) {
    return <LoadingOverlay />;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.primary1000}
            size={48}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.secondary100,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: Colors.primary1000,
    alignItems: "center",
  },
});
