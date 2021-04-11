import pandas as pd

def recipes_based_on_preferences(recipes, vegan, vegetarian, keto, under_30_min, under_5_dollars, dairy_free, gluten_free, egg_free, fish_free, shellfish_free, tree_nut_free, peanut_free, soybean_free):
    #final_recipes = data_frame.copy() #maybe not need to copy?
    if vegan == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Vegan'] == 0:
               recipes = recipes.drop(item)

    if vegetarian == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Vegetarian'] == 0:
               recipes = recipes.drop(item)
    
    if keto == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Keto'] == 0:
               recipes = recipes.drop(item)
    
    if under_30_min == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Under_30_Minutes'] == 0:
               recipes = recipes.drop(item)

    if under_5_dollars == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Under_5_Dollar_Serving'] == 0:
               recipes = recipes.drop(item)
    
    if dairy_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Dairy_Free'] == 0:
               recipes = recipes.drop(item)
    
    if gluten_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Gluten_Free'] == 0:
               recipes = recipes.drop(item)
    
    if egg_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Egg_Free'] == 0:
               recipes = recipes.drop(item)

    if fish_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Fish_Free'] == 0:
               recipes = recipes.drop(item)

    if shellfish_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Shellfish_Free'] == 0:
               recipes = recipes.drop(item)

    if tree_nut_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Tree_Nut_Free'] == 0:
               recipes = recipes.drop(item)

    if peanut_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Peanut_Free'] == 0:
               recipes = recipes.drop(item)
    
    if soybean_free == True:
        for item in recipes.index: 
            if recipes.loc[item, 'Soybean_Free'] == 0:
               recipes = recipes.drop(item)

    return recipes

def recipe_generator(recipes):

    if input("Do you want vegan food?") == 'yes':
        vegan = True
    else:
        vegan = False

    if input("Do you want vegetarian food?") == 'yes':
        vegetarian = True
    else:
        vegetarian = False

    if input("Do you want keto food?") == 'yes':
        keto = True
    else:
        keto = False

    if input("Do you want food made in under 30 minutes?") == 'yes':
        under_30_min = True
    else:
        under_30_min = False

    if input("Do you want food under $5 a serving?") == 'yes':
        under_5_dollars = True
    else:
        under_5_dollars = False

    if input("Do you want dairy free food?") == 'yes':
        dairy_free = True
    else:
        dairy_free = False

    if input("Do you want gluten free food?") == 'yes':
        gluten_free = True
    else:
        gluten_free = False

    if input("Do you want egg free food?") == 'yes':
        egg_free = True
    else:
        egg_free = False

    if input("Do you want fish free food?") == 'yes':
        fish_free = True
    else:
        fish_free = False

    if input("Do you want shellfish free food?") == 'yes':
        shellfish_free = True
    else:
        shellfish_free = False

    if input("Do you want tree nut free food?") == 'yes':
        tree_nut_free = True
    else:
        tree_nut_free = False

    if input("Do you want peanut free food?") == 'yes':
        peanut_free = True
    else:
        peanut_free = False

    if input("Do you want soybean free food?") == 'yes':
        soybean_free = True
    else:
        soybean_free = False
        
    new_data_frame = recipes_based_on_preferences(recipes, vegan = vegan, vegetarian = vegetarian, keto = keto, under_30_min = under_30_min, under_5_dollars = under_5_dollars, dairy_free = dairy_free, gluten_free = gluten_free, egg_free = egg_free, fish_free = fish_free, shellfish_free = shellfish_free, tree_nut_free = tree_nut_free, peanut_free = peanut_free, soybean_free = soybean_free)
    return new_data_frame

    #CAN SAVE AS CSV FILE LATER IF NEEDED