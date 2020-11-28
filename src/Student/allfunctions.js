//student array with objects
var Students = [
    {
        FirstName : "Kavya",
        LastName :   "Meenu",
        City : "Trivandrum",
        Age : 20
       },
       {
        FirstName : "Beena",
        LastName :   "Kumari",
        City : "Chennai",
        Age : 28
       },
       {
        FirstName : "Santhosh",
        LastName :   "Kumar",
        City : "Trivandrum",
        Age : 26
       }
   
   
]

//get the data with full name

var getStudent = Students.map((data)=> data.FirstName + " " + data.LastName 
+ " "+ data.Age + " " + data.City);
console.log("Student Data",getStudent);

//filter student with age greater than 25

var filterAge = Students.filter((data) => data.Age > 25);
console.log("Student with age greater than 25" , filterAge);

//Sum of all students

var age = Students.map((data) => data.Age);
var sumAge = age.reduce((prev,current) => prev += current);
console.log("Sum of age of student :" , sumAge);

//find a student

var findStudent = Students.find((data) => data.FirstName === "Kavya");
console.log("Find Student", findStudent);