export default function isNumber(item: string): boolean {
  return /[0-9]+/.test(item);
}