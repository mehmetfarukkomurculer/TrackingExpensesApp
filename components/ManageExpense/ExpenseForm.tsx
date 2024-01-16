import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { Colors } from "../../utils/colors";
import { useState } from "react";
import Button from "../UI/Button";
import { ExpenseProp } from "../../interfaces/ExpenseProp";
import { TemporaryProps } from "../../interfaces/TemporaryProps";
import { getFormattedDate } from "../../utils/date";

interface expenseFormProps {
  onCancel: () => void;
  onSubmit: (expenseData: ExpenseProp) => void;
  submitButtonLabel: string;
  defaultValues: TemporaryProps | undefined;
}

const ExpenseForm: React.FC<expenseFormProps> = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? (defaultValues.amount.toFixed(2)) : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(new Date(defaultValues.date)) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });
  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  
  /*let inpValues = {
    amount: makeCommaDotAmount,
    date: inputs.date.value,
    description: inputs.description.value,
  };*/

  function submitHandler() {
    const makeCommaDotAmount = inputs.amount.value.replace(/,/g, '.');
    const amount = makeCommaDotAmount;
    const date = inputs.date.value;
    const description = inputs.description.value;
    
    const expenseData = {
      amount: +amount,
      date: date,
      description: description,
    };
    const dateForCheck = new Date(expenseData.date).toString();
    const amountIsValid = !isNaN(+amount) && +amount > 0;
    const dateIsValid = (dateForCheck !== 'Invalid Date') && expenseData.date[4] === '-' && expenseData.date[7] === '-';
    const descriptionIsValid = description.trim().length > 0;
  
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
  
    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "numeric",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date (YYYY-MM-DD)"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid input values</Text>}
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
          onPress={submitHandler}
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
    color: Colors.primary700,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  errorText:{
    textAlign: 'center',
    color: Colors.error500,
    marginVertical: 8,
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
