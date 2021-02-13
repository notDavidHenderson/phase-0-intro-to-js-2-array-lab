// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
  cats.push("Ralph");
}
function destructivelyPrependCat(){
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
  cats.length = (cats.length - 1);
}
function destructivelyRemoveFirstCat(){
  cats.shift();
}
function appendCat(){
  const copyCats = [...cats];
  copyCats.push("Broom");
  return copyCats;
}
function prependCat(){
  const copyCats = [...cats];
  copyCats.unshift("Arnold");
  return copyCats;
}
function removeLastCat(){
  const copyCats = [...cats];
  copyCats.length = (copyCats.length - 1);
  return copyCats;
}
function removeFirstCat(){
  const copyCats = [...cats];
  copyCats.shift();
  return copyCats;
}
