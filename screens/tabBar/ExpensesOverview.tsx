import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "../tabBararScreens/RecentExpenses";
import ManageExpense from "../tabBararScreens/ManageExpense";
import AllExpenses from "../tabBararScreens/AllExpenses";
import { Colors } from "../../utils/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.customButtonStyle} onPress={onPress}>
      <View style={styles.customButtonContainer}>{children}</View>
    </TouchableOpacity>
  );
};

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Colors.primary1000,
        headerStyle: {
          backgroundColor: Colors.secondary700,
        },
        headerTintColor: Colors.tertiary100,
      }}
    >
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="calendar"
              size={size}
              color={focused ? Colors.primary1000 : Colors.secondary200}
            />
          ),
          title: "All Expenses",
        }}
      />

      <BottomTabs.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="add"
              size={size}
              color={focused ? Colors.primary1000 : Colors.secondary200}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          title: "Manage Expenses",
        }}
      />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="hourglass"
              size={size}
              color={focused ? Colors.primary1000 : Colors.secondary200}
            />
          ),
          title: "Recent Expenses",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default ExpensesOverview;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: Colors.secondary700,
    borderRadius: 16,
    height: 80,

    shadowOpacity: 0.7,
    shadowColor: Colors.tertiary800,
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  customButtonStyle: {
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  customButtonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.secondary700,
    borderWidth: 1,
    borderColor: Colors.secondary200,
  },
});
