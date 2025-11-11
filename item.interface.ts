export interface CartItem {
    id: number;
    name: string;
    price: number; // Stored in cents to avoid floating point issues
    quantity: number;
}