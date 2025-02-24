var a='even'
var b='odd'
var even=[]
var odd=[]
for(var i=0;i<=100;i++){
    if(i%2==0){
        console.log(a)
        even.push(i)
    }
    else{
        console.log(b)
        odd.push(i)
    }
}
console.log(even)
console.log(odd)
var l = even.length+odd.length
console.log(l)
var squared_arr_even=[]
var squared_arr_odd=[]
for(var j=0;j<l;j++){
    squared_arr_even.push(even[j]+even[j])
    squared_arr_odd.push(odd[j]+odd[j])
}
console.log(squared_arr_even)
console.log(squared_arr_odd)