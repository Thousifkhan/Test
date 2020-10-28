var isToper = false
var marksObtained = window.prompt('Enter the Marks ')
var patter = /[^a-zA-Z]/
var result = marksObtained.match(patter)

if (marksObtained==undefined || marksObtained==null || marksObtained=='' || result==undefined)
	{
		alert('Please enter the valid input')
	}
	else if (marksObtained <= 0 && marksObtained >= 100)
	{
		alert('input a number inbetween 1 to 100 ')
	}
	else
	{
		marksObtained = Number(marksObtained)
		var totalMarks = 100
		var percentage = (marksObtained/totalMarks)*100
		if (percentage > 70) 
		{
			isToper=true
			alert('Topper')
		}
		else
		{
			isToper=false
		}
		alert(isToper)
	}