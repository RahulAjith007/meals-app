import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MEALS} from '../data/Dummy-Data'

const MealDetailScreen = props => {

  const {mealId} = props.route.params;
  console.log(mealId);

  const selectedMeal = MEALS.find(MEAL => MEAL.id === mealId)


  return (
    <View style={styles.screen}>
    <Text>
    {selectedMeal.title}
    </Text>
    </View>
  );
};

// headerRight:( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//   <Item 
//   title='Favourite' 
//   iconName='ios-star' 
//   onPress={() => {
//     console.log('mark as Favourite')
//   }}/>
// </HeaderButtons>)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
