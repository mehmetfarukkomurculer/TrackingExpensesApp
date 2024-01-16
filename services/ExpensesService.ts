import axios from "axios";
import { ExpenseProp } from "../interfaces/ExpenseProp";

const baseUrl =
  "https://expense-tracker-app-72bdf-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData: ExpenseProp) {
  const response = await axios.post(baseUrl + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(baseUrl + "/expenses.json");
  const expenses = [];

  for (const key in response.data){
    const expenseObj = {
        id: key,
        amount: parseFloat(response.data[key].amount),
        description: response.data[key].description,
        date: response.data[key].date,
    }
    expenses.push(expenseObj);
  }
  return expenses;
}


export function updateAnExpense(id: string, expenseData: ExpenseProp){
    return axios.put(baseUrl + `/expenses/${id}.json`, expenseData);
}

export function deleteAnExpense(id: string){
    return axios.delete(baseUrl + `/expenses/${id}.json`);
}