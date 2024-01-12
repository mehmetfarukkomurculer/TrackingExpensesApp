import { View, ScrollView, StyleSheet } from "react-native";
import Button from "./Button";
import { Colors } from "../../utils/colors";

interface FilterProps {
  filterAll: () => void;
  filterLastWeek: () => void;
  filterLastMonth: () => void;
  filterLast3Months: () => void;
  filterLast6Months: () => void;
  active: string;
}

const Filter: React.FC<FilterProps> = ({
  filterAll,
  filterLastWeek,
  filterLastMonth,
  filterLast3Months,
  filterLast6Months,
  active,
}) => {
  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Button
          buttonText="All"
          onPress={filterAll}
          style={[styles.buttons, active === "Total" && styles.active]}
          mode={active === "Total" ? "flat" : ""}
        />
        <Button
          buttonText="Week"
          onPress={filterLastWeek}
          style={[styles.buttons, active === "1week" && styles.active]}
          mode={active === "1week" ? "flat" : ""}
        />
        <Button
          buttonText="Month"
          onPress={filterLastMonth}
          style={[styles.buttons, active === "1month" && styles.active]}
          mode={active === "1month" ? "flat" : ""}
        />
        <Button
          buttonText="3 Months"
          onPress={filterLast3Months}
          style={[styles.buttons, active === "3months" && styles.active]}
          mode={active === "3months" ? "flat" : ""}
        />
        <Button
          buttonText="6 Months"
          onPress={filterLast6Months}
          style={[styles.buttons, active === "6months" && styles.active]}
          mode={active === "6months" ? "flat" : ""}
        />
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: "row",
  },
  scrollView: {
    paddingVertical: 8,
  },
  buttons: {
    marginHorizontal: 4,
    minWidth: 60,
  },
  active: {
    backgroundColor: Colors.primary1000,
  },
});
