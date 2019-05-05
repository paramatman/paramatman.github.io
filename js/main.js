$( document ).ready(function() {
    	
	// wait and display login screen
	
	setTimeout(function(){
		changePage("login.html");
	},500);
			
});

function authenticateUser()
{
	$("#loginForm").click(function(event){
		event.preventDefault();
	});
	
	changePage("home.html");
}

function registerUser()
{
	$("#registerForm").click(function(event){
		event.preventDefault();
	});
	
	changePage("home.html");
}

function changePage(url)
{
	$.mobile.changePage(url);
}