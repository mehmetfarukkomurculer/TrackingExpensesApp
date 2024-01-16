import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TemporaryProps } from "../../interfaces/TemporaryProps";



interface expensesState {
  expenses: TemporaryProps[];
}

const initialState: expensesState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses(state, action: PayloadAction<TemporaryProps[]>){
      state.expenses = action.payload.reverse();
    },
    addExpense(state, action: PayloadAction<TemporaryProps>) {
      state.expenses = [...state.expenses, action.payload];
    },
    deleteExpense(state, action: PayloadAction<string>) {
      // pass an id parameter
      state.expenses = state.expenses
      .filter((expense) => expense.id !== action.payload)
      
    },
    updateExpense(state, action: PayloadAction<TemporaryProps>) {
      const updatableExpenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (updatableExpenseIndex !== -1) {
        const updatableExpense = state.expenses[updatableExpenseIndex];
        const updatedItem = { ...updatableExpense, ...action.payload };
        const updatedExpenses = [...state.expenses];
        updatedExpenses[updatableExpenseIndex] = updatedItem;
        state.expenses = updatedExpenses;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expensesSlice.actions;
export default expensesSlice;
