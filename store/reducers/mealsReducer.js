import {MEALS} from '../../data/Dummy-Data'
import {TOGGLE_FAVOURITE,  SET_FILTERS} from '../actions/mealsActions';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}


const mealsReducer = (state=initialState, action) => {
    switch (action.type){
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(favouriteMeal => favouriteMeal.id === action.mealId)
            const updatedFavMeals = [...state.favouriteMeals]
           updatedFavMeals.splice(existingIndex, 1)
            if(existingIndex >= 0){
                return {...state,
                favouriteMeals: updatedFavMeals
                }
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, 
                    favouriteMeals : state.favouriteMeals.concat(meal)
                }
            }

        case SET_FILTERS:
            const appliedfilters = action.filter
            const updatedFilteredMeals = state.meals.filter (meal => {
                if(appliedfilters.glutenFree && !meal.isGlutenFree){
                   return false 
                }
                if(appliedfilters.lactoseFree && !meal.isLactoseFree){
                    return false 
                 }
                 if(appliedfilters.vegetarian && !meal.isVegetarian){
                    return false 
                 }
                 if(appliedfilters.vegan && !meal.isVegan){
                    return false 
                 }
                 return true;
            })
            return {...state, filteredMeals: updatedFilteredMeals}

            default:
                return state;

    }
   
}


export default mealsReducer;