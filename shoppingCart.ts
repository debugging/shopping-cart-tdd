import { CartItem } from './item.interface';

export class ShoppingCart {
    private items: CartItem[] = [];

    public getItems(): CartItem[] {
        return [...this.items];
    }

    public addItem(newItem: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
        const existingItems = this.items.find(item => item.id === newItem.id);

        if (existingItems) {
            existingItems.quantity += quantity;
        } else {
            this.items.push({
                ...newItem,
                quantity: quantity
            });
        }
    }
}