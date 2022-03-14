var originalArray=[1, 2, 3, 4, 5, 6, 7, 8];
var arr=originalArray;

var n= originalArray.length;


//arr[n-i]
for(i=0;i<n-1;i++){
if(i%2==1)
{
arr[n-i] =arr[i]


}

}

console.log(arr);