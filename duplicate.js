
// .5. Take a array name of your friend and show duplicate name from array

let arr=[23,11,26,23,11,25,16,18,23,11,24]   //raju","manu","rohim", "korim","korim"

console.log("This is array is:"+" "+(arr));


arr.sort(function(a,b) {return a-b});  //sorting
console.log();
console.log("Duplicate Number: ");

for (let i = 0; i < arr.length; i++) {
      // console.log();
       //console.log(arr[i]);
    
    for (let j = i+1; j < arr.length; j++) {

      // console.log(arr[j]);
      // console.log();
        
     if(arr[i]==arr[j]){
      
       console.log(arr[i]);
       }          
      }   
 }

