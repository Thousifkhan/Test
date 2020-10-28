var users =[
{'email':'thousif@gmail.com',
'password':'Password'},
{'email':'thosuif.khan@gmail.com',
'password':'Password'}
]

var validateUser = function(email,password,allUsers)
{
	isUservalid=false
	isPasswordvalid = false
	for(currentUser in allUsers)
	{
		if(allUsers[currentUser]['email']==email)
		{
			isUservalid=true
			
			if(allUsers[currentUser]['password']==password)
			{
				isPasswordvalid=true
				break

			}
			else
			{
				isPasswordvalid=false
			}
			break
		}
		else
		{
			isUservalid=false
		}
	}
	if(isUservalid==true && isPasswordvalid==true)
	{
		alert('Success')
	}
	else if(isPasswordvalid==false && isUservalid==true)
	{
		alert('Incorrect Password')
	}
	else
	{
		alert('User not valid')
	}
}

var email = window.prompt('Enter your mail ID')
var password = window.prompt('Enter your password')
validateUser(email,password,users)