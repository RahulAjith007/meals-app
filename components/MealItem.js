import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native';
import DefaultText from '../components/DefaultText'

const MealItem = props => {
    return (

        <TouchableOpacity onPress= {props.onSelectMeal}>
             <View style={styles.mealItem}>
             <View style= {{...styles.mealRow, ...styles.mealHeader}}>
             <ImageBackground style={styles.bgImage} source={{uri: props.MealData.imageUrl}}>
             <View style={styles.titleContainer}>
             <Text numberOfLines={2} style={styles.title}>{props.MealData.title}</Text>
             </View>
             </ImageBackground>
             </View>
               <View style= {{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{props.MealData.duration}m</DefaultText>
                    <DefaultText>{props.MealData.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.MealData.affordability.toUpperCase()}</DefaultText>
               </View>  
             </View>
        </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({

    mealItem:{
      borderRadius: 10,
      height: 230,
      width: '100%',
      backgroundColor: '#f5f5f5'  ,
      overflow: 'hidden'
    },
    bgImage:{
        height: '100%',
        width: '100%',
        justifyContent: "flex-end",
        borderRadius: 10,
    },
    mealRow:{
        flexDirection: 'row'
    },
    mealHeader:{
        height: '85%'
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer:{
        paddingVertical: 5 ,
        paddingHorizontal:12,
        textAlign: 'center'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
  
})

export default MealItem;