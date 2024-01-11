/*import { createContext, ReactNode, useReducer } from "react";

import { ExpensesProps } from "../interfaces/ExpensesProps";
export type { ExpensesContextType };
const DUMMY_EXPENSES: ExpensesProps[] = [
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
];

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: (expense: {
    description: string;
    amount: number;
    date: Date;
  }) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    expense: { description: string; amount: number; date: Date }
  ) => void;
}

const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

export { ExpensesContext };

interface ExpensesContextProviderProps {
  children: ReactNode;
}

function expensesReducer(
  state: Expense[],
  action: { type: string; payload?: any }
): Expense[] {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: ExpensesContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: {
    description: string;
    amount: number;
    date: string;
  }) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(
    id: string,
    expenseData: {
      description: string;
      amount: number;
      date: string;
    }
  ) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;*/
