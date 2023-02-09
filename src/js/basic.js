export default function lifeLevel(data) {
  const sortedData = data.sort((a, b) => b.health - a.health);

  return sortedData;
}
