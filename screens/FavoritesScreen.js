import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from  '../data/Dummy-Data';

const FavoritesScreen = props => {

  const favMeals = MEALS.filter(MEAL => MEAL.id === 'm1' || MEAL.id === 'm2')

  return (
    <View style={styles.screen}>
      <MealList listData = {favMeals} navigation={props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
