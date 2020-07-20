import React from 'react';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {


const {id} = props.route.params;

const avialableMeals = useSelector(state => state.meals.filteredMeals)


const displayedMeal = avialableMeals.filter( 
  MEAL => MEAL.categoryIds.indexOf(id) >= 0)

let screenContent =   <MealList listData = {displayedMeal} navigation={props.navigation}/>

if(displayedMeal.length === 0 ){
  screenContent = <DefaultText>No meals found! Maybe check your Filters</DefaultText>
    
}

  return (
    <View style={styles.screen}>
        {screenContent}
    </View>
  )
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
