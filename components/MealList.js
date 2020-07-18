import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem = (itemData) => {
        return(
          <MealItem 
          MealData = {itemData.item} 
          onSelectMeal={() => {props.navigation.navigate('Details', {
            mealId: itemData.item.id,
            title: itemData.item.title
          })}}/>
        )
        }

    return (
        <View style={styles.list}>
        <FlatList
          data = {props.listData}
          keyExtractor = {(item, index) => item.id}
          renderItem = {renderMealItem}
          style={{width: '100%'}}
        />
       </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15
      }
})

export default MealList