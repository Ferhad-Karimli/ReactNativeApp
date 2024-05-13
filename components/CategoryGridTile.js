import { View, Pressable, Text, StyleSheet } from "react-native";
function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: "#ccc" }}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 18,
    height: 43,
    borderRadius: 8,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
    color: "white",
  },
});
