import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    saveData() {
        const token = this.authService.getToken();
        return this.http.put('https://demofirebase-f3921.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://demofirebase-f3921.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipe(recipes);
            }
        );
    }
}
