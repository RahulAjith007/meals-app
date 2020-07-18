// React

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//screens

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

//constants

import Colors from '../constants/colors';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Feather} from '@expo/vector-icons'



const MealsNavigator = createStackNavigator();
const FavMealsNavigator = createStackNavigator();
const FilterNavigator = createStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MealsStackNavigation = navData => {
  return (
    
      <MealsNavigator.Navigator mode={'card'} screenOptions={{  headerStyle:{
                                                  backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
                                             },
          headerTintColor: 'white',}}>
        <MealsNavigator.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          headerLeft: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title='Menu' 
            iconName='ios-menu' 
            onPress={() => {
              navData.navigation.toggleDrawer()
            }}/>
        </HeaderButtons>)
          
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


const FavStackNavigation = navData => {
  return (
    
      <FavMealsNavigator.Navigator mode={'card'} screenOptions={{  headerStyle:{
                                                  backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
                                             },
          headerTintColor: 'white',}}>
        <FavMealsNavigator.Screen 
        name="Favourites" 
        component={FavouritesScreen} 
        options={{
          title: " Your Favourites"
        }}

        />
        <FavMealsNavigator.Screen 
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
      </FavMealsNavigator.Navigator>
   
  );
}




const MealsTabNavigation = navData => {
  return (
  
  <MealsFavTabNavigator.Navigator tabBarOptions={{
    activeTintColor: Colors.accentColor
  }}>
      <MealsFavTabNavigator.Screen
       name="Home" 
       component={MealsStackNavigation}
       options={{
         tabBarIcon: (tabInfo) => {
           return(
                <Ionicons name="ios-restaurant" size={25} color={tabInfo.color}/>
           )
         },
         
       }}
        />
      <MealsFavTabNavigator.Screen name="Favourites"
       component={FavStackNavigation} 
       options={{
         tabBarIcon: (tabInfo) => {
           return(
                <Ionicons name="ios-star" size={25} color={tabInfo.color}/>
           )
         },
         
       }}
       />
 </MealsFavTabNavigator.Navigator>
 
)}


const FilterStackNavigation = navData => {
  return (
    
      <FilterNavigator.Navigator mode={'card'} screenOptions={{  headerStyle:{
                                                  backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
                                             },
          headerTintColor: 'white',}}>
        <FilterNavigator.Screen 
        name="Filter" 
        component={FiltersScreen} 
        options={{
          title: " Filter",
          headerLeft: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title='Menu' 
            iconName='ios-menu' 
            onPress={() => {
              navData.navigation.toggleDrawer()
            }}/>
        </HeaderButtons>)
        }}
        />
      </FilterNavigator.Navigator>
   
  );
}

const MainNavigator = navData => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions = {{
        activeTintColor: Colors.accentColor,
        labelStyle:{
          fontFamily: 'open-sans-bold'
        }
      }} 
      initialRouteName="MealsFav">
       
        <Drawer.Screen 
        name="MealsFav" 
        component={MealsTabNavigation}
        options={{
          title: "Meals"
        }}
      />

    <Drawer.Screen name="Filters" 
            component={FilterStackNavigation}
            options={{
              headerLeft: () => ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                title='Menu' 
                iconName='ios-menu' 
                onPress={() => {
                  navData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>)
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




export default MainNavigator;



