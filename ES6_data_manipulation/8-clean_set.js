export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const array = [];
  for (const v of set.values()) {
    if (startString !== '' && v !== undefined && v.startsWith(startString)) {
      array.push(v.slice(startString.length));
    }
  }
  return array.join('-');
}
