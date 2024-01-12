import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesOverview from "../tabBar/ExpensesOverview";
import ManageExpense from "../tabBararScreens/ManageExpense";
import { Colors } from "../../utils/colors";
import { NavigationParamList } from "../../utils/NavigationParamList";

const Stack = createNativeStackNavigator<NavigationParamList>();

export default function AppIndex() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
            headerShown: false
          }}/>
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpense}
            options={{
              presentation: 'modal',
              headerStyle: { backgroundColor: Colors.primary1000},
              headerTintColor: Colors.secondary100
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
