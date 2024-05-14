import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealsDetailed", {
      mealId: id,
    });
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.mealItem}>{affordability}</Text>
          <Text style={styles.mealItem}>{duration}</Text>
          <Text style={[styles.mealItem, styles.lastItem]}> {complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
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
  buttonPressed: {},
});
