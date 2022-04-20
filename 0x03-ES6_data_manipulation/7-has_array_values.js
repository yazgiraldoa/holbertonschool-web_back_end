export default function hasValuesFromArray(set, array) {
  const val = [];
  array.forEach((element) => {
    val.push(set.has(element));
  });
  if (val.every((currentValue) => currentValue === true)) {
    return true;
  }
  return false;
}
