import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import {MEALS} from '../data/Dummy-Data'
import DefaultText from '../components/DefaultText';


const ListItem = props => {
  return(
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {

  const {mealId} = props.route.params;
 

  const selectedMeal = MEALS.find(MEAL => MEAL.id === mealId)


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
