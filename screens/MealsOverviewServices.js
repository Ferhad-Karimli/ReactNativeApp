import { View, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { Category } from "../data/dummy-data";

function MealsOverView({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS?.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItem(itemData) {
    const mealItems = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
    };

    return <MealItem {...mealItems} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        //   contentContainerStyle={styles.container}
        //   numColumns={NUM_COLUMNS}
      />
    </View>
  );
}

export default MealsOverView;
