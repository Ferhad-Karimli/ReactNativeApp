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
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View>
      <Text> MealsOverview {categoryId}</Text>

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
