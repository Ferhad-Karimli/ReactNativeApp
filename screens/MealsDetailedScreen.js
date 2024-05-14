import { View, Text } from "react-native";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import MealsDetailed from "../components/MealsDetailed";
import { MEALS } from "../data/dummy-data";

function MealsDetailedScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const item = MEALS?.find((category) => category?.id == mealId);

  navigation.setOptions({
    title: item.title,
  });
  return (
    <View>
      <MealsDetailed
        image={item.image}
        title={item.title}
        duration={item.duration}
        ingredients={item.ingredients}
        steps={item.steps}
      />
    </View>
  );
}

export default MealsDetailedScreen;
