$( document ).ready(function() {
    	
	var recorder;	
	// wait and display login screen
	
	setTimeout(function(){
		changePage("login.html");
	},500);
	
	$(document).on("pageshow","#recordScreen",function(){
		
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then(function (stream) {
				recorder = new MediaRecorder(stream);

				recorder.addEventListener('dataavailable', onRecordingReady);
		});
		
	});
		
	$(document).on("click","#record",function(event){
		recorder.start();		
	});
	
	$(document).on("click","#stop",function(event){
		recorder.stop();		
	});
	
});

function onRecordingReady(e) {
  var audio = document.getElementById('recording');
  
  audio.src = URL.createObjectURL(e.data);
  
  audio.play();
}

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

	