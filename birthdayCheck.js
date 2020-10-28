/*function birthdayCheck(dateOfBirth)
{
	var today = new Date()
	var currentmonth = today.getMonth()
	presentMonth=Number(currentmonth+1)
	var currentyear = today.getFullYear()
	var dob = new Date(dateOfBirth)
	var yourBdydate = dob.getDate()
	var yourBdyMonth = dob.getMonth()
	var currentDate = today.getDate()
	var yourBdyYear = dob.getFullYear()
	if (currentDate == yourBdydate && currentmonth == yourBdyMonth )
	{
		alert('You are born today')
		var yourAge = Number(currentyear-yourBdyYear)
		alert(yourAge)
	}
	else if (presentMonth > yourBdyMonth) 
	{
		alert('Your birthday is not today you have to wait till ' + yourBdydate +":"+Number(yourBdyMonth+1)+":"+Number(currentyear+1))
	}
	else
	{
		alert('Your birthday is not today you have to wait till ' + yourBdydate +":"+Number(yourBdyMonth+1)+":"+currentyear)
	}


}
var dateOfBirth = window.prompt("Please enter your in DOB in yyyy-mm-dd format ")
//alert(typeof(dateOfBirth))
birthdayCheck(dateOfBirth)*/
/*Write a function calculateAge() that takes your birthday in the format dd,mm,yyyy
 and returns your age. 
Sample function input
calculateAge(28,02,1992)
Output - 28
*/



let calculateAge = function(day, month, year) {
  var input = new Date(Date.now());
  var currentMonth = input.getMonth();
  var currentYear = input.getFullYear();
  var yourAge = Number(currentYear-year);
  return yourAge;

};
var Output = calculateAge(03,03,1995);
console.log(Output);
alert(Output);
//module.exports = { calculateAge: calculateAge };
//alert(calculateAge(28,02,1992));