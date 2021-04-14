export default function addingZeros(string) {
  const str = string;
  const changer = str.replace(",", ".");
  const number = +changer;
  const result = number.toFixed(3);

  return result;
}


