//  Add Arrays with Nested Loop

var arr1 = [1,2,3,4,5];
var arr2 = [1,2,3,4,5];

for(var i =0; i <arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
        if(arr1[i] == arr2[j]){
            console.log(arr1[i] + arr2[j]);
        }
     }
}