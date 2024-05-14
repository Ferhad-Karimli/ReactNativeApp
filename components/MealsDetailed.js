import { View, Image, StyleSheet, ScrollView } from "react-native";
import List from "./mealDetail/List";
import Subtitle from "./mealDetail/Subtitle";
function MealsDetailed({ image, ingredients, steps }) {
  return (
    <ScrollView>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View>
          <Subtitle>Ingredients </Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailed;

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 12,
  },
  image: {
    width: "100%",
    height: 180,
    // margin: 20,
    marginVertical: 8,
    // marginHorizontal: ,
    // marginLeft: 6,
  },
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
