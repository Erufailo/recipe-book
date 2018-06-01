import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Crunchy Chicken', 'This is a test chicken', 'http://d1feh1dhsditw.cloudfront.net/media/36258/crunchychicken_right.jpg', [
      new Ingredient('chicken', 1),
      new Ingredient('breadcrumps', 1)
    ]),
    new Recipe('Fish with Lemons', 'This is a second test with fish and lemons', 'https://bit.ly/2sm0fZe', [
      new Ingredient('Fish', 1),
      new Ingredient('Lemons', 3)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}

