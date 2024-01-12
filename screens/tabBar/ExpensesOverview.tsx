import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../tabBararScreens/AllExpenses";
import { Colors } from "../../utils/colors";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Stats from "../tabBararScreens/Stats";
import IconButton from "../../components/UI/IconButton";

const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerStyle: {
          backgroundColor: Colors.primary1000,
        },
        headerTintColor: Colors.secondary100,
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color={Colors.secondary100}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              size={size}
              color={focused ? Colors.primary500 : Colors.secondary100}
            />
          ),
          title: "All Expenses",
        }}
      />
      <BottomTabs.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="stats-chart-outline"
              size={size}
              color={focused ? Colors.primary500 : Colors.secondary100}
            />
          ),
          title: "Statistics",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default ExpensesOverview;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.primary1000,
  },
});
