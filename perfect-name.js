
// ৪. [ ফাংশন নেম দিতে হবে perfectFriend]

let arr=["raju","manu","rohim", "korim","korim"]

function perfacetfriend(arr) {

    let frnd="";
    let namelength=4;
    
    for (let i = 0; i < arr.length; i++) {
    
        if (arr[i].length>=namelength) {
            frnd=arr[i];
            return frnd;   
        }
    }   
}
console.log(perfacetfriend(arr));