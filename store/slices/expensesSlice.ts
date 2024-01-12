import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesProps } from "../../interfaces/ExpensesProps";
import { TemporaryProps } from "../../interfaces/TemporaryProps";



interface expensesState {
  expenses: TemporaryProps[];
}

const initialState: expensesState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2023-05-05").toISOString(),
    },
    {
      id: "e2",
      description: "jacket",
      amount: 79.99,
      date: new Date("2023-04-14").toISOString(),
    },
    {
      id: "e3",
      description: "food",
      amount: 9.25,
      date: new Date("2023-08-07").toISOString(),
    },
    {
      id: "e4",
      description: "coffee",
      amount: 2.5,
      date: new Date("2023-06-01").toISOString(),
    },
    {
      id: "e5",
      description: "tea",
      amount: 1.99,
      date: new Date("2023-08-30").toISOString(),
    },
    {
      id: "e6",
      description: "Course",
      amount: 44.43,
      date: new Date("2023-10-20").toISOString(),
    },
    {
      id: "e7",
      description: "A book",
      amount: 14.99,
      date: new Date("2023-11-01").toISOString(),
    },
    {
      id: "e8",
      description: "jan test",
      amount: 150,
      date: new Date("2023-01-01").toISOString(),
    },
    {
      id: "e9",
      description: "feb test",
      amount: 160,
      date: new Date("2023-02-01").toISOString(),
    },
    {
      id: "e10",
      description: "march test",
      amount: 170,
      date: new Date("2023-03-01").toISOString(),
    },
    {
      id: "e11",
      description: "july test",
      amount: 180,
      date: new Date("2023-07-01").toISOString(),
    },
    {
      id: "e12",
      description: "sep test",
      amount: 200,
      date: new Date("2023-09-01").toISOString(),
    },
    {
      id: "e13",
      description: "dec test",
      amount: 240,
      date: new Date("2023-12-01").toISOString(),
    },
    {
      id: "e14",
      description: "jun test",
      amount: 100,
      date: new Date("2023-06-01").toISOString(),
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<TemporaryProps>) {
      action.payload.id =
        action.payload.date.toString() + Math.random().toString();
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

export const { addExpense, deleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice;
