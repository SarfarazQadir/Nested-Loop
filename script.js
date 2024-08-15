//  Add Arrays with Nested Loop

// var arr1 = [1,2,3,4,5];
// var arr2 = [1,2,3,4,5];

// for(var i =0; i <arr1.length; i++){
//     for(var j = 0; j < arr2.length; j++){
//         if(arr1[i] == arr2[j]){
//             console.log(arr1[i] + arr2[j]);
//         }
//      }
// }


// Sort The Array Values Withh Nested Loop

var arr = [2,4,5,9.1,6,8,3,7];

for(var i =0; i <arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            }
            
        }
        console.log(temp);
}