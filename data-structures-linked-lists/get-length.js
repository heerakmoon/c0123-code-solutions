export default function getLength(list) {
  let listLength = 0;
  while (list) {
    listLength++;
    list = list.next;
  }
  return listLength;
}
