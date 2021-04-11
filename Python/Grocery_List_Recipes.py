from Cuisine_Preference import *
import csv
data_frame = second_subsetted_recipes()

#getting all recipes with what food is going bad
going_bad = input('What is going bad?') #first letter needs to be uppercase or won't match titles in data frame
try:
    for item in data_frame.index: 
        if data_frame.loc[item, going_bad] == 0:
            data_frame = data_frame.drop(item)
except:
    print('ingredient not found')

# opening the CSV file
with open('Grocery_List.csv', mode ='r')as file:
    
  # reading the CSV file
  csvFile = csv.reader(file)
  
  # displaying the contents of the CSV file
  for lines in csvFile:
        print(lines)

recipe_names = []
for val in lines:
    try:
        for dish in data_frame.index:
            if data_frame.loc[dish, val] == 1:
                if dish not in recipe_names:
                    recipe_names.append(dish)

    except:
        print('title not found')

print(recipe_names)

