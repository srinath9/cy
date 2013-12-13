


function validate ()
{
	var element=document.getElementById("full");
	var elemen=document.getElementById("user");
	var eleme=document.getElementById("pass");
	var element1=document.getElementById("conf");
	var element2=document.getElementById("email");
	var full = $('#fullname').val();
	var user = $('#username').val();
	var pass = $('#password').val();
	var conf = $('#conform').val();
	var email = $('#email').val();
	var full = full.trim();
	var user = user.trim();
	var pass = pass.trim();
	var conf = conf.trim();
	var email = email.trim();
	if($('#fullname').val()==' ' || full.length == 0)
					{
						
						element.innerHTML="Enter Fullname";
						elemen.innerHTML="";
						eleme.innerHTML="";
						element1.innerHTML="";
						element2.innerHTML="";
						fullname.value=fullname.defaultValue;
						return false;
					}
		if($('#username').val()=='' || user.length == 0)
					{
						element.innerHTML="";
						eleme.innerHTML="";
						element1.innerHTML="";
						element2.innerHTML="";
						username.value=username.defaultValue;
						elemen.innerHTML="Enter Username";
						return false;
					}
		if($('#password').val()=='' || pass.length == 0)
					{
						element.innerHTML="";
						elemen.innerHTML="";
						element1.innerHTML="";
						element2.innerHTML="";
						password.value=password.defaultValue;
						eleme.innerHTML="Enter password";
						return false;
					}
		if($('#conform').val()=='' || conf.length == 0)
					{
						element.innerHTML="";
						elemen.innerHTML="";
						eleme.innerHTML="";
						element2.innerHTML="";
						element1.innerHTML="re-type password";
						conform.value=conform.defaultValue;
						return false;
					}
		if($('#conform').val() == $('#password').val())
		{
						element.innerHTML="";
						elemen.innerHTML="";
						eleme.innerHTML="";
						element1.innerHTML="";
						element2.innerHTML="";

		}
		else
		{
						element.innerHTML="";
						elemen.innerHTML="";
						eleme.innerHTML="";
						element2.innerHTML="";
						element1.innerHTML="password mismatch";
						conform.value=conform.defaultValue;
						return false;
		}

		
		
		
}


	



