let allUserdetais=[]
let storeAddress =(userID,...addressTostore) =>{
	let getAdress={userID:userID,userAddress:addressTostore}
	allUserdetais.push(getAdress)
	console.log(allUserdetais)
	return allUserdetais
}

let firstAddress ={
	"name":"Thousif",
	"phone":"9629942039",
	"Street":"Ganga Nagar",
	"City":"Hosur",
	"District":"Krishnagiri"

}
let secondAddress ={
	"name":"Thousif1",
	"phone":"8526977370",
	"Street":"Ganga Nagar",
	"City":"Hosur",
	"District":"Krishnagiri"

}
storeAddress("Thousif Khan",firstAddress,secondAddress)


let calculateAge = function(day, month, year) {
  // start your code here.
  var today = new Date();
  var thisMonth = today.getMonth();
  var thisYear = today.getFullYear();
  var yourAge = thisYear - year;
  var output = "Your age is " + yourAge;
  return output;
 };
 alert(calculateAge(28,02,1992));


