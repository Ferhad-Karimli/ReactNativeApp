import { Pressable, Text, View, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUrl }) {
  console.log(imageUrl, "imageUrl");
  return (
    <View>
      <View>
        {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center",
  },
});