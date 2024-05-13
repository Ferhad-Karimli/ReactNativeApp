import { Button, Dimensions, FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsoverView", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      //   contentContainerStyle={styles.container}
      //   numColumns={NUM_COLUMNS}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
