import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {MEALS} from '../data/Dummy-Data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {

const renderMealItem = (itemData) => {
return(
  <MealItem MealData = {itemData.item} onSelectMeal={() => {}}/>
)
}

const {id} = props.route.params;


const displayedMeal = MEALS.filter( MEAL => MEAL.categoryIds.indexOf(id) >= 0)

console.log(id);
  return (
    <View style={styles.screen}>
     <FlatList
       data = {displayedMeal}
       keyExtractor = {(item, index) => item.id}
       renderItem = {renderMealItem}
       style={{width: '100%'}}
     />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15
  }
});

export default CategoryMealScreen;
