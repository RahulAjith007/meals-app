import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryMealScreen = props => {

console.log(props.route.params);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('Details')} style={{color:'blue'}}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
