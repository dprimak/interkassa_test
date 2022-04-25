export default function arrayToString(arr) {
  return arr.map((item, index) => item.title.en).join(', ');
}