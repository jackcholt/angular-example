import {Injectable} from '@angular/core';
import {Product} from "./products";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: Product[] = [];

    constructor() {
    }

    /**
     * Add a new product to the cart.
     * @param product - the product to be added
     */
    addToCart(product: Product): void {
        this.items.push(product);
    }

    getItems(): Product[] {
        return this.items;
    }

    clearCart(): Product[] {
        this.items = [];
        return this.items;
    }
}
