import db from './fakeDb.json'

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: db.products }), 3000)
})}
