// React

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'

//constants

import colors from '../constants/colors';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { log } from 'react-native-reanimated';



const MealsNavigator = createStackNavigator();

const MealsNavigation = props => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default MealsNavigation;