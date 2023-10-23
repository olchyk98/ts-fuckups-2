export function getFoodCategory (): Category {
  return {
    name: 'Food',
    products: [
      {
        name: 'Fish',
        price: {
          value: 200,
          currency: 'UAH',
        },
      },
    ],
  }
}

interface Category {
  name: string
  products: Product[]
}

type Currency = 'SEK' | 'USD'

interface Price {
  value: number
  currency: Currency
}

interface Product {
  name: string
  price: Price
}
