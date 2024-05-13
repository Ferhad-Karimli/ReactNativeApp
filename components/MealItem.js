import { Pressable, Text, View, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUrl, affordability, complexity, duration }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.mealItem}>{affordability}</Text>
          <Text style={styles.mealItem}>{duration}</Text>
          <Text style={styles.mealItem}> {complexity}</Text>
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
    overflow: "hidden",
    backgroundColor: "white",
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
});
