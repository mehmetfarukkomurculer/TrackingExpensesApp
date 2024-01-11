import { StatusBar } from "expo-status-bar";
import AppIndex from "./screens/main/AppIndex";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppIndex />
        <StatusBar style="light" />
      </Provider>
    </>
  );
}
