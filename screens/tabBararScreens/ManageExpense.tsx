import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../utils/colors";
import Button from "../../components/UI/Button";
import { useAppDispatch } from "../../store/hooks";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../store/slices/expensesSlice";

const ManageExpense = ({ route, navigation }: any) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
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
  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          description: "EditedTest",
          amount: 50,
          date: new Date().toISOString(),
        })
      );
    } else {
      dispatch(
        addExpense({
          id: editedExpenseId,
          description: "AddedTest",
          amount: 50,
          date: new Date().toISOString(),
        })
      );
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          buttonText="Cancel"
          mode="flat"
          onPress={cancelHandler}
        />
        <Button
          style={styles.button}
          buttonText={isEditing ? "Update" : "Add"}
          onPress={confirmHandler}
        />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.primary900}
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
    backgroundColor: Colors.secondary400,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: Colors.secondary700,
    alignItems: "center",
  },
});
