import lifeLevel from '../basic';

test('should return sorted data by life level 1', () => {
  const data = lifeLevel([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(data).toEqual(result);
});

test('should return sorted data by life level 2', () => {
  const data = lifeLevel([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ]);
  const result = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ];
  expect(data).toEqual(result);
});

test('should return sorted data by life level 3', () => {
  const data = lifeLevel([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(data).not.toBe(result);
});
