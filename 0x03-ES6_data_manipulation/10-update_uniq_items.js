export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  const iter = map.entries();
  for (const item of iter) {
    if (item[1] === 1) {
      map.set(item[0], 100);
    }
  }
  return map;
}
