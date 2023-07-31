// const FirstOBJ = {
    
//     GivenMark: 0,

   
  
    
//     get marks() {
//       return this.GivenMark;
//     },
  
    
//     set marks(value) {
//       if (value >= 0) {
       
//         this.GivenMark = value;
//       } else {
//         console.log("GivenMark cannot be less than 0.");
//       }
//     },
//   };
  
//   FirstOBJ.marks = 85; 
//   console.log(FirstOBJ.marks); 
  
//   FirstOBJ.marks = -10; 
//   console.log(FirstOBJ.marks); 

// --------------------------------------------------------------------------------
// const FreezeObj={
   

//     FirstValue : null,

//     get result(){
//         return this.FirstValue;

//     },
    

    
    
//     set result (value)  {
       
//         if(this.FirstValue==null)
//         {
//             this.FirstValue=value;
//         }
//         else 
//         {
//             Object.freeze(this.FirstValue);
//         }

 
//     }
// }
// FreezeObj.result="Aysel";
// FreezeObj.result="Yusuif";
// console.log(FreezeObj.result);


// -------------------------------------------------------------------



// const myJson={

//   id : 110,
//   Name : "Yusuf",
//   Password : "Balaca"

// }



// console.log(myJson);
// let jsonObj=JSON.stringify(myJson,["Name","id"]);

// console.log(jsonObj);



// -----------------------------------------------------------------------

// const CountObj={

//     firstCount :0,

//     get count() {
//         this.firstCount++;
//         return this.firstCount;
//     }

// }

// CountObj.count;
// CountObj.count;
// console.log(CountObj.count);

// ---------------------------------------------------------------------


// class Employee {
//     constructor(id, name) {
//       this.id = id;
//       this.name = name;
//       this._salary = 0; 
//     }
  
   
//     get salary() {
//       return this._salary;
//     }
  
    
//     set salary(value) {
//       if (value >= 0) {
        
//         this._salary = value;
//       } else {
//         console.log("Salary is less than 0.");
//       }
//     }
//   }
  
  
//   const yusuf = new Employee(1, "Yusuf");
  
  
//   yusuf.salary = 50000;
  
  

  
//  console.log(yusuf.name);
//  console.log(yusuf.id);
//  console.log(yusuf.salary);

// --------------------------------------------------------------------------



// function tagManager(){

//     const topics={};

//     function addTags(Program,Platform) {

//         const SlpeedPlatform=Platform.split(",");

//        topics[Program]=SlpeedPlatform;
//     }

//     function getTags(Platform)  {

//         const Propram=[];

//         for (const key in topics) {
          
//             if(topics.hasOwnProperty(key) && topics[key].includes(Platform)){

//                 Propram.push(key);

//             }
//         }
//    return Propram;
        
//     }
//     return {
//         addTags,
//         getTags,
//       };
// }

// const tagManagerInstance = tagManager();
// tagManagerInstance.addTags("a","b,c,d,f,g,g,y,t,tr,yusuf");
// console.log(tagManagerInstance.getTags("f"));

// console.log(tagManagerInstance.topics);



// ----------------------------------------------------------------------------------------------------







// function Platforma(num1,num2)
// {
// if( typeof num1!=='number' || typeof num2!=='number'){

//     throw console.error("values must be number");
// }
// const number1=num1;
// const number2=num2;

// return{

//    sumOfNumber : function()
//    {

//    return  number1+number2;
//    },

//    difference : function(){
//     return number1-number2;
//    },
//    product: function () {
//       return number1 * number2;
//     },
//     dividend: function () {
//       if (number2 === 0) {
//         throw new Error('Cannot divide by zero.');
//       }
//       return number1 / number2;
     
      
//       }
//     }
// }

// // const NumberOperators = Platforma(10, 2);
// console.log(Platforma(10, 2).sumOfNumber()); 
// console.log(Platforma(10, 2).difference()); 
// console.log(Platforma(10, 2).product()); 
// console.log(Platforma(10, 2).dividend()); 
