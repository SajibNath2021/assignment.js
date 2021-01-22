//code-link(github):https://github.com/SajibNath2021/assignment.js


//code 1
function kilometerToMeter(num){
   
    if(num >0){                                          // this condition not allow invalid value 
        return  meter = num *1000;
    }
    else{
        return "error....distance have to be a number ";
    }
}
var result = kilometerToMeter(2);
console.log(result);

// end of (code 1).converting kilometer to meter......

//code 2
function budgetCalculator(watchQ, phoneQ, laptopQ){         //quantity perameter
  

        if(watchQ > 0 && phoneQ >0 && laptopQ> 0){         //only (quantity>0) allowed & not allowed any false value
            var watchPrice = watchQ * 50;
            var phonePrice = phoneQ * 100;
            var laptopPrice = laptopQ * 500;
            return totalBudget = watchPrice + phonePrice + laptopPrice ;
       }
       else{      
            return "error...Quantity always a number";
       }
}
var result = budgetCalculator(1, 1, 1);
console.log(result);

//end of code 2.budget calculation...

//code 3
function hotelCost(day){
    if(day>0){                                  //for not allowing invalid value
        if(day<= 10){
            return totalCost = day*100;
        }
        else if(day<=20){
            var first10Day = 10* 100;
            var dueDays = day -10; 
            var last10Day = dueDays * 80
            return totalCost = first10Day + last10Day;
        }
        else{
            var first10Day = 10* 100;
            var second10Day =10* 80;
            var dueDay = day- 20;
            var last10Day = dueDay * 50;
            return totalCost = first10Day + second10Day + last10Day;
        }
    }
    else{
        return "error....day have to be a number";
    }
   
}
var result = hotelCost(2);
console.log(result);

//end of code 3. hotel cost..........

//code 4
function megaFriend(arr){
    
    
        var mega = arr[0];
        for(var i =0; i < arr.length ; i++){
            var output = arr[i];
            if( typeof arr[ i] === 'string'){            // only string allow & not allow false value
                if(output.length>mega.length){           // coparison (when output is bigger it set on mega)
                    mega = output;
                }
            }
            else{
                return 'error....plz enter a string name ';
            }

        }
        return mega;
      
}
    
var result = megaFriend(["kamal", "jamal", "kaka faruq", "titu"]);
console.log(result);

//end of code 4. mega friend........