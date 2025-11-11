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

    public removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id === itemId)
    }

    public updateItemQuantity(itemId: number, newQuantity: number): void {
        const itemIndex = this.items.findIndex(item => item.id === itemId);

        if (itemIndex > -1) {
            if (newQuantity <= 0) {
                this.items.splice(itemIndex, 1);
            } else {
                this.items[itemIndex].quantity = newQuantity;
            }
        }
    }


    public clearCart(): void {
        this.items = [];
    }
}