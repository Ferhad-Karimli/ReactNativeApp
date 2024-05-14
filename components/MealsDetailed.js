import { View, Pressable, Text, StyleSheet } from "react-native";
import List from "./mealDetail/List";
import Subtitle from "./mealDetail/Subtitle";
function MealsDetailed({ duration, ingredients, steps }) {
  return (
    <View>
      <View>
        <Subtitle>Ingredients </Subtitle>
        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </View>
  );
}

export default MealsDetailed;

const styles = StyleSheet.create({
  image: { width: "100%", height: 180 },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  mealItem: {
    marginTop: 5,
    textAlign: "center",
  },
  lastItem: {
    marginBottom: 10,
  },
});
