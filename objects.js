var student = { 
    name:'raju',
    rollno:101,
    branch:'CSE',
    college:'aaaa'
};
console.log(student)
console.log(student.name)
console.log(student.rollno)
console.log(student.college)
console.log(student['branch'])
var mobile={
    brand : 'vivo',
    models:['t3','t2','y25','t2 pro'],
    categories:{
        c1:'android mobiles',
        c2:'audio gadgets'
    }
}
console.log(mobile.models[3])
console.log(mobile.categories.c2)
delete student.rollno
console.log(student)
