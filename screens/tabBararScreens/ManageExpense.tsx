import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
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

const ManageExpense = ({ route, navigation }: any) => {
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

  function deleteExpenseHandler() {
    navigation.goBack();
    dispatch(deleteExpense(editedExpenseId));
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData: ExpenseProp) {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          description: expenseData.description,
          amount: +expenseData.amount,
          date: expenseData.date,
        })
      );
    } else {
      dispatch(
        addExpense({
          id: editedExpenseId,
          description: expenseData.description,
          amount: +expenseData.amount,
          date: expenseData.date,
        })
      );
    }
    navigation.goBack();
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
