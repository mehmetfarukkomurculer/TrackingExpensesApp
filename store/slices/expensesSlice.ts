import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesProps } from "../../interfaces/ExpensesProps";

interface expensesState {
  expenses: ExpensesProps[];
}

const initialState: expensesState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2023-05-05"),
    },
    {
      id: "e2",
      description: "jacket",
      amount: 79.99,
      date: new Date("2023-04-14"),
    },
    {
      id: "e3",
      description: "food",
      amount: 9.25,
      date: new Date("2023-08-07"),
    },
    {
      id: "e4",
      description: "coffee",
      amount: 2.5,
      date: new Date("2023-06-01"),
    },
    {
      id: "e5",
      description: "tea",
      amount: 1.99,
      date: new Date("2023-08-30"),
    },
    {
      id: "e6",
      description: "Course",
      amount: 44.43,
      date: new Date("2023-10-20"),
    },
    {
      id: "e7",
      description: "A book",
      amount: 14.99,
      date: new Date("2023-11-01"),
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<ExpensesProps>) {
      action.payload.id =
        action.payload.date.toString() + Math.random().toString();
      state.expenses = [...state.expenses, action.payload];
    },
    deleteExpense(state, action: PayloadAction<string>) {
      // pass an id parameter
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense(state, action: PayloadAction<ExpensesProps>) {
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

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice;
