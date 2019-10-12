export default function isNumber(item) {
  return /^[0-9]\d*(.\d+)?$/.test(item);
}
