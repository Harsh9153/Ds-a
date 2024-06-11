let arr=[1,5,9,12,16,18,19,22,25];
let element=160;
let first=0,last=arr.length-1;


// function binary(arr,first,last,element)

// {

//   if(last>=first)
//     {
//         let mid=Math.floor((first+last)/2)

//         if(arr[mid]==element)
//             {
//                 return true;
//             }
//             if(arr[mid]>element)
//                 {
//                     return binary(arr,mid-1,first,element)
//                 }
//                 else{

//                     return binary(arr,mid+1,last,element)

//                 }
            
//     }
//     return false;
// }
// let demo=binary(arr[0],arr.length,element);
// console.log(demo);


function binary(arr,element)
{
    do{
        let mid=Math.floor((first+last)/2)
        if(arr[mid]== element)
            {
                return true
                // console.log(arr);
            }
            if(element<arr[mid]){
                last=mid-1
                // console.log(last);
            }
            if(element>arr[mid]){
                first=mid+1
            }
            return false

    }while(first<=last)

}
    
let bin=binary(arr,element);
console.log(bin);