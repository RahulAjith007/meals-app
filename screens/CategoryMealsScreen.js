import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MEALS} from '../data/Dummy-Data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {


const {id} = props.route.params;


const displayedMeal = MEALS.filter( MEAL => MEAL.categoryIds.indexOf(id) >= 0)


  return <MealList listData = {displayedMeal} navigation={props.navigation}/>
};

const styles = StyleSheet.create({

});

export default CategoryMealScreen;
