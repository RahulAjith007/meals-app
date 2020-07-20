import React, {useCallback, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import DefaultText from '../components/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/actions/mealsActions'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'



const ListItem = props => {

  return(
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {

  const {navigation} = props
  const {mealId} = props.route.params;
  const availableMeals = useSelector(state => state.meals.meals)
  const selectedMeal = availableMeals.find(MEAL => MEAL.id === mealId)
  const currentMealIsFavourite = useSelector(state => 
    state.meals.favouriteMeals.some(meal => meal.id === mealId))

const dispatch = useDispatch();

const toggleFavouriteHandler = useCallback(() => {
  dispatch(toggleFavourite(mealId))
},[dispatch, mealId])

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
        title='Favourite' 
        iconName= {currentMealIsFavourite ? 'ios-star' : 'ios-star-outline'} 
        onPress={toggleFavouriteHandler}/>
    </HeaderButtons>)
    });
  }, [toggleFavouriteHandler, currentMealIsFavourite]);

  

  return (
    <ScrollView>
    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
    <View style= {styles.Details}>
         <DefaultText>{selectedMeal.duration}m</DefaultText>
         <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
         <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
   </View>  
   <Text style={styles.title}>{selectedMeal.title}</Text>
  {selectedMeal.ingredients.map( ingredient => {
    return (
      <ListItem key={ingredient}>{ingredient}</ListItem>
    )
  })}
   <Text style={styles.title}>steps</Text>
   {selectedMeal.steps.map( step => {
    return (
      <ListItem key={step}>{step}</ListItem>
    )
  })}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  Details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  image:{
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'

  },
  listItem:{
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
