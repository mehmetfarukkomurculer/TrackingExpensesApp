import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { Colors } from "../../utils/colors";
import { useState } from "react";
import Button from "../UI/Button";
import { ExpenseProp } from "../../interfaces/ExpenseProp";
import { TemporaryProps } from "../../interfaces/TemporaryProps";

interface expenseFormProps {
    onCancel: () => void;
    onSubmit: (expenseData: ExpenseProp) => void;
    submitButtonLabel: string;
    defaultValues: TemporaryProps |undefined;
}

const ExpenseForm: React.FC<expenseFormProps> = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.slice(0,10) : '',
    description: defaultValues ? defaultValues.description : '',
  });
  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler(){
    const expenseData = {
        amount: inputValues.amount,
        date: new Date(inputValues.date).toISOString(),
        description: inputValues.description,
    };
    onSubmit(expenseData);
  }
  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          buttonText="Cancel"
          mode="flat"
          onPress={onCancel}
        />
        <Button
          style={styles.button}
          buttonText={submitButtonLabel}
          onPress={() => onSubmit(inputValues)}
        />
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
});
