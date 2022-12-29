export function formatPopulation(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getObjectValues(object: Object | undefined) {
  if (object) {
    let valuesList: string[] = [];
    for (const value of Object.values(object)) {
      if (value.name) {
        valuesList.push(value.name);
      } else {
        valuesList.push(value);
      }
    }
    return valuesList.join(", ");
  }
}
