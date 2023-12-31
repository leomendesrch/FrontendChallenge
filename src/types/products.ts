export interface Products {
  name: string,
  price_in_cents: number,
  id: string,
  image_url: string
}

export interface ProductsInCart extends Products {
  quantity: number
}