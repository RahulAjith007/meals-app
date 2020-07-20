import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../data/Dummy-Data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {
  
const renderGridItem = (itemData) => {
  return (
    <CategoryGridTile color={itemData.item.color} title = {itemData.item.title} onSelect = {() => {
      props.navigation.navigate('Meals', {id: itemData.item.id, title: itemData.item.title})
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
