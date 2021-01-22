// var factorial = 1;
// for(var i= 1 ,i <= 5; i++) {
//   factorial = factorial * i;

//   console.log(factorial);
// }
// Practice module 
// var depth =21;
// var animal = 0;
// if(depth<=10){
//   animal = depth * 5;
// }
// else if(depth<=20){
//   firstpart = 10* 5;
//   remaining = depth - 10;
//   secondpart = remaining * 10;
//   animal = firstpart + secondpart;
// }
// else{
//   firstpart = 10* 5;
//   secondpart = 10*10;
//   remaining = depth - 20;
//   thirdpart = remaining* 30;
//   animal= firstpart +secondpart+ thirdpart;
// }
// console.log(animal);

function kilomile( depth){
  if(depth<=10){
    animal = depth * 5;
  }
  else if(depth<=20){
    firstpart = 10* 5;
    remaining = depth - 10;
    secondpart = remaining * 10;
    animal = firstpart + secondpart;
  }
  else{
    firstpart = 10* 5;
    secondpart = 10*10;
    remaining = depth - 20;
    thirdpart = remaining* 30;
    animal= firstpart +secondpart+ thirdpart;
  }
  return animal;
}
var result = kilomile(22);
console.log(result);