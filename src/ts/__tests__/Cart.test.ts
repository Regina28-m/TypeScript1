import Cart from '../service/Cart';
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'
import Movie from '../domain/Movie'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('totalSun should be 3100', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1054, 'The Avengers', 200, 2012, 'USA', 'Avengers Assemble', 'фантастика, приключения',  '137 min / 02:17'));
  let result = cart.totalSum();
  expect(result).toEqual(3100)
});

test('totalSum with 15% discount should be 2635', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1054, 'The Avengers', 200, 2012, 'USA', 'Avengers Assemble', 'фантастика, приключения',  '137 min / 02:17'));
  let result = cart.totalSumDiscount(15);
  expect(result).toEqual(2635)
});

test('delete one element', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1054, 'The Avengers', 200, 2012, 'USA', 'Avengers Assemble', 'фантастика, приключения',  '137 min / 02:17'));
  cart.deleteItem(1008);
  let result = cart.items
  expect(result.length).toEqual(2)
});




