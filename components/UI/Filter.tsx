import { View, ScrollView, StyleSheet } from "react-native";
import Button from "./Button";

interface FilterProps {
    filterAll: () => void;
    filterLastWeek: () => void;
    filterLastMonth: () => void;
    filterLast3Months: () => void;
    filterLast6Months: () => void;
}

const Filter: React.FC<FilterProps> = ({filterAll, filterLastWeek, filterLastMonth, filterLast3Months, filterLast6Months}) => {
  return (
    <View style={styles.scrollViewContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Button buttonText="All" onPress={filterAll} style={styles.buttons} />
        <Button
          buttonText="Week"
          onPress={filterLastWeek}
          style={styles.buttons}
        />
        <Button
          buttonText="Month"
          onPress={filterLastMonth}
          style={styles.buttons}
        />
        <Button
          buttonText="3 Months"
          onPress={filterLast3Months}
          style={styles.buttons}
        />
        <Button
          buttonText="6 Months"
          onPress={filterLast6Months}
          style={styles.buttons}
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
});
