$( document ).ready(function() {
    	
	var recorder;	// Recorder Screen - recorder
	
	// wait and display login screen
	setTimeout(function(){
		changePage("login.html");
	},500);
	
	//Login Screen - Sign In Button
	$(document).on("click","#loginSignIn",function(event){
		event.preventDefault();
		changePage("home.html");		
	});
	
	//Login Screen - Sign Up Button
	$(document).on("click","#loginSignUp",function(event){
		event.preventDefault();
		changePage("register.html");		
	});
	
	//Register Screen - Sign Up Button
	$(document).on("click","#registerSignUp",function(event){
		event.preventDefault();
		changePage("home.html");		
	});
	
	//Home Screen - Add Button
	$(document).on("click","#homeAddRecording",function(event){
		event.preventDefault();
		changePage("record.html");		
	});
	
	// Record Screen - On Page Show 
	$(document).on("pageshow","#recordScreen",function(){
		
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then(function (stream) {
				recorder = new MediaRecorder(stream);

				recorder.addEventListener('dataavailable', onRecordingReady);
		});
		
	});
		
	// Record Screen - Record Button
	$(document).on("click","#record",function(event){
		recorder.start();		
	});
	
	// Record Screen - Stop Button    
	$(document).on("click","#stop",function(event){
		recorder.stop();		
	});
			
});

function onRecordingReady(e) {
  var audio = document.getElementById('recording');
  
  audio.src = URL.createObjectURL(e.data);
  
  audio.play();
}

function changePage(url)
{
	$(":mobile-pagecontainer").pagecontainer("change", url);
}

	