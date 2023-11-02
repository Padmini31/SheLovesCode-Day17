//TASK
//revise let & const & var diff
//arrow function & prev function diff
//create multiple, division, subtraction function with fat arrow


mul=(n)=>{
    return n*8;
}
r=mul(6);
console.log ("multiplication - ",r);


divi=(n, m)=>{
    return n/m;
}
r=divi(6,3);
console.log ("division of ",r);


subs=(n,m)=>{
    return n-m;
}
r=subs(16,9);
console.log ("substract- ",r);


// array helper functions: map, filter, find, some, reduce, every

a=[6,10,4,12,4,25,68];
console.log("arra",a);
j=a.every((e)=>{
    
    return e==25;
});
console.log("every - ",j);


//reduce
res=a.reduce((p,c)=>{
    return p*c;
});
console.log ("reduce -",res);

//map
res=a.map((e)=>{
    return e*4;
});
console.log ("map functn-",res);

//some
res=a.some((e)=>{
    return e>89;
});
console.log ("some functn-",res);

//filter
res=a.filter((e)=>{
    return e==4;
});
console.log ("filter functn-",res);

//for forEach
a.forEach((e)=>{
    console.log (e);
});

//find

res=a.find((e)=>{
    return e==4;
});
console.log ("find functn-",res);



// task: use e6


var ab=35;
{
    const a=6;
    let b=9;
    //cannot redeclar a variable.in let case. which has already been deckared (var, let or const)
    //a=91;
    console.log("a and b ",a, b);
   
}
   
a=79;
//let a=46;// cannot redeclar already declare variable
console.log("a", a) ;
//console.log("b ", b);


// 1.check if all the property values(firstName) in an array of object is same or not

//array of object
A=[
    {
        firstName: 'Ankita',
        id: 1,
         age: 12
    }, {
        firstName: 'Ankita',
         id: 2,
         age: 12
    }, {
        firstName: 'Ankita',
        id: 3,
        age: 12
    }
 ];
 console.log(A);
obj=A.map((e)=>{
     
     console.log(e.firstName);
     fn=e.firstName;
     evr=A.every((el)=>{
         return el.firstName==fn;
          
     });
     console.log("evry" ,evr);
     return evr;
 });
 
console.log(obj);
fynd=obj.find((e)=>{
    return e==false;
});
console.log(fynd);
if(fynd==null){
    console.log("Objects have same property values");
    
}
else{
    console.log("different objects property values ");
}




//2. get the value of the first element in an array that has value greater than 20


B=[5,6,8,92,400];
console.log(B);
fun=B.find((e)=>{
    return e>20;
});


console.log (fun);


// 3. get the value of the first element in an array that has value less than 20


C=[5,6,8,92,400];
console.log(C);
fun=C.find((e)=>{
    return e<20;
});


console.log (fun);


// 4. filter data based on a id(property) in an array of objects: pick any random id value


B=[5,6,8,92,2,400];
console.log(B);
fun=B.filter((e)=>{
    return e==2;
});


console.log ("filter - ",fun);


// 5. round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]

num=4.2;
R=Math.round(num);
console.log ("round ",num," ",R);


B=[9.8, 9.7, 4.5, 3.4];
console.log(B);
fun=B.map((e)=>{
    R=Math.round(e);
    return R;
});

console.log("rounded off no ",fun);

neu=fun.reduce((p,c)=>{
    return p+c;
});
console.log("sum ",neu);


// 6.get all the person name based on age greater than and equal to 18, eligible to vote
Arr=[{
  firstName: 'joe',
 age: 24
 }, {
   firstName: 'alina',
  age: 12
 },
 {
 firstName: 'alex',
 age: 20
 }
];
console.log(Arr);

res=Arr.filter((e)=>{
    return e.age>=18;
});

res.forEach((e)=>{
    console.log(e.firstName," ",e.age);
});



// 7. sum all the elements of an array [90, 89, 56, 45]

r=[90, 89, 56, 45];
console.log(r);
ar=r.reduce((p,c)=>{
    return p+c;
});

console.log("sum of ary is ",ar);




// 8. check element is odd or even in an array [90, 89, 56, 45]

r=[90, 89, 56, 45];
console.log(r);
r.forEach((e)=>{
    if(e%2==0){
     console.log ("even",e);
    }
    else{
     console.log ("Odd",e);
    }
});


// 9. sum of all the salaries and display final sum value
z=[{
  salary: 56000,
 },
{
   salary: 90000
 }];
 
console.log(z);
sum=z.reduce((p,c)=>{
    return p.salary+c.salary;
});

console.log(sum);


// 10. concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'


z=['red', 'pink', 'orange', 'red'];
console.log(z);
con=z.reduce((p,c)=>{
    return p+c;
});

console.log(con);


//TASK

//create a class Car: city(),specialFeature()
//name, brand, color, manufacture

//create a class Book: type_of_book()
//no. of pages, type of pages, author

//create a class Animal: walk(), eat(), climb()
//gender, name, disease






class Car {
  constructor(n,b,c, m){
      this.name=n;
      this.brand=b;
      this.color=c;
      this.manufacture=m;
  } 
  city(c) {
     console.log(this.name," City is ",c);
  }
  specialFeature(h) {
      console.log(h);
  }
}
var carobj=new Car("Luxury sports car","Lamborghini","yellow",1963);
obj2=new Car("Mass market cars","Toyota","orange",1937);

console.log (carobj);
console.log (obj2);

carobj.city("Italy");
carobj.specialFeature("high-performance.Each model is known for its exceptional performance and design");

obj2.city("japan");
obj2.specialFeature("Road Sign Assist, Automatic High Beams, Lane Tracing Assist, and Full-Speed Range Dynamic Cruise Control or Dynamic Radar Cruise Control");


class Book {
  constructor(nam,n,t,au){
      this.name=nam;
      this.pagesNo=n;
      this.type=t;
      this.author=au;
  }
  type_of_book(t) {
     console.log("name -"+this.name," type of book is ",t);
  }
}
var obj1=new Book("Coming Up for Air",223,"George Orwel");
obj2=new Book("Harry Potter",200,"J.K. Rowling");

console.log (obj1);
console.log (obj2);

obj1.type_of_book("fiction");



obj2.type_of_book("fantasy");




class Animal {
  constructor(nam,gen,dis){
      this.name=nam;
      this.gender=gen;
      this.disease=dis;
     
  }
  walk() {
     console.log(this.name," is walking");
  }
  
  eat(){
      console.log(this.name," is eating. ");
  }
  climb(){
    console.log(this.name," is climbing");  
  }
}
var obj1=new Animal("cat","male","CSD");
obj2=new Animal("dog","female","rabbies");

console.log (obj1);
console.log (obj2);

obj1.walk();
obj1.eat();
obj1.climb();
obj2.walk();
obj2.eat();
obj2.climb();




// Inheritance
//parent class
	
	
