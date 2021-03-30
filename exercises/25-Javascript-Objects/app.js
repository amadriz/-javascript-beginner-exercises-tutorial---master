var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  for(let x = 0; x < anArray.length; x++){
      for (let i = 0; i < anArray[x].lucky_numbers.length; i++){
          sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[x].lucky_numbers[i]
      }

  }
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:


//Enter all your code here:
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "Masculino",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
};

family.members.push(person3)
family.members[1].significant_other.lucky_numbers.pop()
family.members[1].significant_other.lucky_numbers.push(33)



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 