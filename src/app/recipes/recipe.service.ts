import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'http://d1feh1dhsditw.cloudfront.net/media/36258/crunchychicken_right.jpg'),
    new Recipe('A second recipe', 'This is a second test', 'https://bit.ly/2sm0fZe')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
