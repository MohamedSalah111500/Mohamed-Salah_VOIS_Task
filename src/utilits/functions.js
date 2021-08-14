
// use this function for check if object in array using identifer for comparison 
export function findObjectFromArrayOfIt(object, array, identifer) {
  return array.find((e) => e[identifer] === object[identifer]);
}
