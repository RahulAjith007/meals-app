import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import DefaultText from '../components/DefaultText'


const FavoritesScreen = props => {

  const favMeals = useSelector(state => state.meals.favouriteMeals)


let screenContent = <MealList listData = {favMeals} navigation={props.navigation}/>


if(favMeals.length ===0 || !favMeals){ 
  screenContent = <DefaultText>No Favourite Meals found. Start adding some!</DefaultText>
}

  return (
    <View style={styles.screen}>
      {screenContent}
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
