import { ShoppingCart } from './shoppingCart';
import { CartItem } from './item.interface';

describe('ShoppingCart', () => {
    let cart: ShoppingCart;

    const itemA = { id: 1, name: 'ProductA', price: 199};
    const itemB = { id: 2, name: 'ProductB', price: 599};

    beforeEach(() => {
        cart = new ShoppingCart();        
    })

    it('should be empty when initialized', () => {
        expect(cart.getItems()).toEqual([]);
    });

    it('should add a new item to the cart', () => {
        cart.addItem(itemA);
        const items = cart.getItems();

        expect(items.length).toBe(1);
        expect(items[0]).toEqual({...itemA, quantity: 1});
    });

    it('should increment quantity when the same item is added to the cart', () => {
        cart.addItem(itemA);
        cart.addItem(itemA, 2);
        const items = cart.getItems();

        expect(items.length).toBe(1);
        expect(items[0].quantity).toBe(3);
    });

    it('should remove an item by its ID', () => {
        cart.addItem(itemA);
        cart.addItem(itemB);
        
        cart.removeItem(itemB.id);

        const items = cart.getItems();
        expect(items.length).toBe(1);
        expect(items[0].id).toBe(itemB.id); // Only ProductB should remain
    });

    it('should update the quantity of an existing item', () => {
        cart.addItem(itemA, 5);
        
        cart.updateItemQuantity(itemA.id, 2);
        
        const items = cart.getItems();
        expect(items[0].quantity).toBe(2);
    });

    it('should clear all items from the cart', () => {
        cart.addItem(itemA);
        cart.addItem(itemB);

        expect(cart.getItems().length).toBe(2);

        cart.clearCart();
        expect(cart.getItems().length).toBe(0);
    });
});