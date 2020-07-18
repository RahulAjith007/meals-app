// React

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouritesScreen from '../screens/FavoritesScreen'

//constants

import colors from '../constants/colors';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const MealsNavigator = createStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();


const MealsNavigation = props => {
  return (
    
      <MealsNavigator.Navigator mode={'card'} screenOptions={{  headerStyle:{
                                                  backgroundColor: Platform.OS === 'android'? colors.primaryColor : ''
                                             },
          headerTintColor: 'white',}}>
        <MealsNavigator.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'Categories'
        }} />
        <MealsNavigator.Screen 
        name="Meals" 
        component={CategoryMealsScreen} 
        options={(
          { route } ) => ({ title: route.params.title })}

        />
        <MealsNavigator.Screen 
        name="Details" 
        component={MealDetailScreen} 
        options={(
          { route } ) => ({ title: route.params.title,
            headerRight: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                    title='Favourite' 
                    iconName='ios-star' 
                    onPress={() => {
                      console.log('mark as Favourite')
                    }}/>
                </HeaderButtons>)}
          )}
        />
      </MealsNavigator.Navigator>
   
  );
}


const MealsTabNavigation = props => {
  return (
    <NavigationContainer>
  <MealsFavTabNavigator.Navigator>
      <MealsFavTabNavigator.Screen name="Home" component={MealsNavigation} />
      <MealsFavTabNavigator.Screen name="Settings" component={FavouritesScreen} />
 </MealsFavTabNavigator.Navigator>
 </NavigationContainer>
)}

export default MealsTabNavigation;