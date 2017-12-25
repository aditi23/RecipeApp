import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

private recipes: Recipe[] = [
    new Recipe(
        'Wat a burger',
        'What an awesome burger!!!',
        'http://www.freepngimg.com/download/burger/6-2-burger-png-image.png',
        [
            new Ingredient('bun', 1),
            new Ingredient('cheese', 1)
        ]
    ),
    new Recipe(
        'A testing Recipe 2',
        'This is a recipe 2',
        'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg',
        [
            new Ingredient('something2', 1),
            new Ingredient('somethingTestig2', 1),
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    onAddToShoppingListRecipes(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getActiveRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    onDelete(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}
