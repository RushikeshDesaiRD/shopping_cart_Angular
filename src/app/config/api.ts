import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = "http://localhost:3000/prouducts"
export const cartUrl = "http://localhost:3000/cart"
export const wishlistUrl = "http://localhost:3000/wishlist"
