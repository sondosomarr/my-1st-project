//let d="-100";
// let e="20";
// let f=30;
// let g=true;



// let a=10_0;
// let b=2_00.5;
// let c=1e2;
// let d=2.4;
// console.log(Math.round(Math.min(a,b,c,d)));
// console.log(Math.floor(d))
// console.log(d.toFixed())
// console.log(parseInt(d))
// console.log(parseInt(d))

// let st = "Elzero Web School";
// if (typeof st === typeof "34") {  // Use straight double quotes
//   console.log("Good");  // Use straight double quotes
// }

// document.write("<h1>Hello <span>Page</span></h1>");

// console.log("Hello From JS File");
//

let myAmins=["Athanasius","Ahmed","Osama","Sayed","Stop","Samera",];
let myEmployees=["Amgad","Samah","Sayed","Ameer","Omar","Othman","Athanasius"];

document.write(`<div> <h2>we have ${myAmins.length} Admins</div>`);

for(let i=0;i<myAmins.length;i++){
  if(myAmins[i]==="Stop"){
    break;
  }
  document.write(`<div> <h3>The Admin For Team ${i+1} is ${myAmins[i]}</h3></div>`);
     let admFirstLetter=myAmins[i][0];
     let count=1;
  for (let k=0; k<myEmployees.length;k++){
    let empFirstLetter=myEmployees[k][0]; 

    if(admFirstLetter===empFirstLetter){
      document.write(`<p>${count++} - ${myEmployees[k]}<p>`);
    }
  }
  document.write(`<hr>`);
  }
  

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Sayed", "Ameer", "omar", "Othman"];

// for (let i = 0; i < myAdmins.length; i++) {
//   // Break the loop if the admin is 'Stop'
//   if (myAdmins[i] === "Stop") {
//     break;
//   }

//   // Write the admin info
//   document.write(`<div> <h3>The Admin For Team ${i + 1} is ${myAdmins[i]}</h3></div>`);

//   // Get the first letter of the current admin's name
//   let admFirstLetter = myAdmins[i][0].toLowerCase();

//   // Loop through employees
//   for (let k = 0; k < myEmployees.length; k++) {
//     let empFirstLetter = myEmployees[k][0].toLowerCase();

//     // If the first letter of the employee matches the admin
//     if (admFirstLetter === empFirstLetter) {
//       document.write(`<p>${myEmployees[k]}</p>`);
//     }
//   }

//   document.write('<hr>');
// }




