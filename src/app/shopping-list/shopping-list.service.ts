import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Bananas', 5),
        new Ingredient('Melons', 2),
        new Ingredient('Peaches', 7)
        ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}