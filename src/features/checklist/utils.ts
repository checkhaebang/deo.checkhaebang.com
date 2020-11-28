import { CheckQuestion } from "./models";

export function groupBy(
  list: CheckQuestion[],
  filter: CallableFunction
): Map<string, CheckQuestion[]> {
  const map = new Map<string, CheckQuestion[]>();
  list.forEach((item) => {
    const key = filter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
