import React, { useState,useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/colors';
import { CommonActions } from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'



const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch 
    trackColor={{
      true: Colors.primaryColor
    }}
    thumbColor={Platform.OS === 'android'? Colors.primaryColor: ''}
    value={props.state} 
    onValueChange={props.onChange}/>
  </View>
  )
}

const FiltersScreen = props => {
  const {navigation} = props

const [isGlutenFree, setIsGlutenFree] = useState(false);
const [isLactoseFree, setIsLactoseFree] = useState(false);
const [isVegan, setIsVegan] = useState(false);
const [isVegetarian, setIsVegetarian] = useState(false);

const saveFilters = useCallback(() => {
  const appliedFilters = {
    glutenFree : isGlutenFree,
    lactoseFree : isLactoseFree,
    vegan: isVegan,
    isVegetarian: isVegetarian
  }
  console.log(appliedFilters);
},[isGlutenFree, isLactoseFree, isVegan, isVegetarian]);


React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
      title='Save' 
      iconName='ios-save' 
      onPress={saveFilters}/>
    
  </HeaderButtons>)
  });
}, [saveFilters]);



  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch 
        label='Gluten-free' 
        state={isGlutenFree} 
        onChange={newValue => setIsGlutenFree(newValue)}/>

     <FilterSwitch 
        label='lactose-free' 
        state={isLactoseFree} 
        onChange={newValue => setIsLactoseFree(newValue)}/>

      <FilterSwitch 
        label='Vegan' 
        state={isVegan} 
        onChange={newValue => setIsVegan(newValue)}/>

      <FilterSwitch 
        label='Vegetarian' 
        state={isVegetarian} 
        onChange={newValue => setIsVegetarian(newValue)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15

  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'

  }
});

export default FiltersScreen;
