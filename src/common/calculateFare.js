

export const calculate = (area, from, to) => {

  var fromIndex = area.indexOf(from);
  var toIndex = area.indexOf(to);
  var diff = fromIndex - toIndex;
  var fare = Math.abs(diff*25);
  return fare;
}