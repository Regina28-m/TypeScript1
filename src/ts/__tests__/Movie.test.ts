import Buyable from "../domain/Buyable";
import Movie from "../domain/Movie";

test('create new movie', () => {
    let newMovie: Buyable = new Movie(125, 'The Avengers', 150, 2012, "USA", 'Avengers Assemble', 'fantasy', '137 min / 02:12')
    expect(newMovie).toEqual({
        id: 125,
        name: 'The Avengers',
        price: 150,
        year: 2012,
        country: "USA",
        slogan: 'Avengers Assemble',
        genre: 'fantasy', 
        time: '137 min / 02:12',
    });
});