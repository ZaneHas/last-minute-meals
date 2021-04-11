import pandas as pd
from suggestions_input import *


def recipes_based_on_cuisine(recipes, b, ld, des):

    if b == False:
        for item in recipes.index: 
            if recipes.loc[item, 'Meal_Type'] == 'Breakfast':
               recipes = recipes.drop(item)
    
    if ld == False:
        for item in recipes.index: 
            if recipes.loc[item, 'Meal_Type'] == 'Lunch/Dinner':
               recipes = recipes.drop(item)

    if des == False:
        for item in recipes.index: 
            if recipes.loc[item, 'Meal_Type'] == 'Dessert':
               recipes = recipes.drop(item)
    return recipes


def second_subsetted_recipes():
    recipes = pd.read_csv('Recipes_Data_Set.csv', sep = ',')
    recipes.set_index('Dish_Name', inplace = True)
    first_recipes = recipe_generator(recipes)


    if input("Do you want breakfast?") == 'no':
        b = False
    else:
        b = True

    if input("Do you want lunch/dinner?") == 'no':
        ld = False
    else:
        ld = True

    if input("Do you want dessert?") == 'no':
        des = False
    else:
        des = True

    return recipes_based_on_cuisine(first_recipes, b, ld, des)