import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import {CATEGORIES} from '../data/Dummy-Data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {

  console.log(props);
  
const renderGridItem = (itemData) => {
  return (
    <CategoryGridTile color={itemData.item.color} title = {itemData.item.title} onSelect = {() => {
      props.navigation.navigate('Meals', {title: itemData.item.title})
    }}/>
  )}

  return (
    
     <FlatList
     keyExtractor={(item, index) => item.id}
       data={CATEGORIES}
       numColumns={2}
       renderItem ={renderGridItem}
     />
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
