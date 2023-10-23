interface Entity<T> {
  id: T
}

interface User extends Entity<number> {
  name: string
}

interface Product extends Entity<string> {
  name: string
  price: number
}

interface EntityMap {
  user: User
  product: Product
}

function getEntityId<T extends keyof EntityMap> (entity: EntityMap[T]): EntityMap[T]['id'] {
  return entity.id
}

// Now, introduce a type error:
interface Book extends Entity<boolean> {
  title: string;
}

export function logBookId (book: Book): void {
  // This line will throw a complex TypeScript error
  console.log(getEntityId(book))
}
