
//code 1
// function kilometerToMeter(num){
//     if(num < 0){       //for negetive vallue
//         return "distance cannot be negative";
//     }
//     else{
//         return  meter = num *1000;
//     }
// }
// var result = kilometerToMeter(-10);
// console.log(result);

// end of (code 1).converting kilometer to meter......

//code 2
// function budgetCalculator(watchQ, phoneQ, laptopQ){ //quantity perameter
    
//     if(watchQ < 0 || phoneQ <0 || laptopQ< 0){ // if any of quantity is negetive return error 
//         return "Quantity cannot be negative";
//         } 

//     else{
//         var watchPrice = watchQ * 50;
//         var phonePrice = phoneQ * 100;
//         var laptopPrice = laptopQ * 500;
//         return totalBudget = watchPrice + phonePrice + laptopPrice ;
//        }
// }
// var result = budgetCalculator(1, 1, 1);
// console.log(result);

//end of code 2.budget calculation...

//code 3
// function hotelCost(day){
//     if(day< 0){
//         return "day cannot be negative";
//     }
//     else if(day<= 10){
//         return totalCost = day*100;
//     }
//     else if(day<=20){
//         var first10Day = 10* 100;
//         var dueDays = day -10; 
//         var last10Day = dueDays * 80
//         return totalCost = first10Day + last10Day;
//     }
//     else{
//         var first10Day = 10* 100;
//         var second10Day =10* 80;
//         var dueDay = day- 20;
//         var last10Day = dueDay * 50;
//         return totalCost = first10Day + second10Day + last10Day;
//     }
// }
// var result = hotelCost(-22);
// console.log(result);

//end of code 3. hotel cost..........

//code 4
function megaFriend(arr){
    var mega = arr[0];
    for(var i =0; i < arr.length ; i++){
        var output = arr[i];
        if(output.length>mega.length){ //main coparison (when output is bigger it set on mega)
            mega = output;
        }
    }
    return mega;

}
var result = megaFriend(["kamal", "jamal", "kaka faruq", "titu"]);
console.log(result);

//end of code 4. mega friend........