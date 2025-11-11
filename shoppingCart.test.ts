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

});